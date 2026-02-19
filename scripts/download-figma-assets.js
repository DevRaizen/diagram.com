/**
 * Download individual images/SVGs from Figma nodes.
 *
 * Quick usage:
 * 1) List direct child nodes of the frame:
 *    node scripts/download-figma-assets.js --list --frame=19:9
 * 2) Download only selected IDs:
 *    node scripts/download-figma-assets.js --ids=19:10,19:11 --formats=svg
 *
 * PowerShell token setup:
 *   $env:FIGMA_ACCESS_TOKEN="your-token"
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const FIGMA_FILE_KEY = 'DtnBhF5V0w9GXZWVN68zB9';
const DEFAULT_FRAME_ID = '19:9';
const ASSETS_DIR = path.join(__dirname, '..', 'assets');

function parseArgs(argv) {
  const args = {
    list: false,
    allChildren: false,
    frame: DEFAULT_FRAME_ID,
    ids: [],
    formats: ['svg', 'png'],
    scale: 2,
  };

  argv.forEach((raw) => {
    if (raw === '--list') args.list = true;
    else if (raw === '--all-children') args.allChildren = true;
    else if (raw.startsWith('--frame=')) args.frame = raw.slice('--frame='.length);
    else if (raw.startsWith('--ids=')) {
      args.ids = raw
        .slice('--ids='.length)
        .split(',')
        .map((v) => v.trim())
        .filter(Boolean);
    } else if (raw.startsWith('--formats=')) {
      args.formats = raw
        .slice('--formats='.length)
        .split(',')
        .map((v) => v.trim().toLowerCase())
        .filter((v) => ['svg', 'png', 'jpg', 'pdf'].includes(v));
    } else if (raw.startsWith('--scale=')) {
      const n = Number(raw.slice('--scale='.length));
      if (!Number.isNaN(n) && n >= 0.01 && n <= 4) args.scale = n;
    }
  });

  return args;
}

function getEnvToken() {
  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (!token) {
    console.error('Missing FIGMA_ACCESS_TOKEN. Set it before running:');
    console.error('  PowerShell: $env:FIGMA_ACCESS_TOKEN="your-token"; node scripts/download-figma-assets.js');
    console.error('  CMD: set FIGMA_ACCESS_TOKEN=your-token && node scripts/download-figma-assets.js');
    process.exit(1);
  }
  return token;
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'X-Figma-Token': getEnvToken() } }, (res) => {
      let data = '';
      res.on('data', (ch) => (data += ch));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error('Invalid JSON: ' + data.slice(0, 200)));
        }
      });
    }).on('error', reject);
  });
}

function safeNameFromNodeId(nodeId) {
  return nodeId.replace(/:/g, '-');
}

async function listDirectChildren(frameId) {
  const encodedFrame = encodeURIComponent(frameId);
  const url = `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${encodedFrame}&depth=1`;
  const res = await fetchJson(url);
  if (res.err) {
    throw new Error(`Figma API error while listing children: ${res.err}`);
  }

  const frameNode = res.nodes && res.nodes[frameId] && res.nodes[frameId].document;
  if (!frameNode) {
    throw new Error(`Frame node not found: ${frameId}`);
  }

  const children = frameNode.children || [];
  if (!children.length) {
    console.log(`No direct children found under frame ${frameId}.`);
    return [];
  }

  console.log(`Direct children under frame ${frameId}:`);
  children.forEach((child, i) => {
    const name = child.name || '(no name)';
    const type = child.type || '(unknown)';
    const id = child.id || '(no id)';
    console.log(`${String(i + 1).padStart(2, ' ')}. ${name} [${type}] id=${id}`);
  });
  return children;
}

function downloadToFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    client.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadNodeAssets(nodeIds, formats, scale) {
  if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
  }

  const idsParam = nodeIds.map((id) => encodeURIComponent(id)).join(',');
  for (const format of formats) {
    const url = `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${idsParam}&format=${format}${format === 'png' || format === 'jpg' ? `&scale=${scale}` : ''}`;
    console.log(`Fetching ${format.toUpperCase()} export URLs from Figma...`);
    const res = await fetchJson(url);
    if (res.err) throw new Error(`Figma API error (${format}): ${res.err}`);

    const images = res.images || {};
    for (const [nodeId, imageUrl] of Object.entries(images)) {
      if (!imageUrl) {
        console.warn(`No URL for node ${nodeId} (${format})`);
        continue;
      }

      const filename = `${safeNameFromNodeId(nodeId)}.${format}`;
      const filepath = path.join(ASSETS_DIR, filename);
      console.log('Downloading', filename, '...');
      await downloadToFile(imageUrl, filepath);
      console.log('Saved:', filepath);
    }
  }
}

async function main() {
  getEnvToken();
  const args = parseArgs(process.argv.slice(2));

  if (args.list) {
    await listDirectChildren(args.frame);
    console.log('\nUse selected IDs with:');
    console.log('node scripts/download-figma-assets.js --ids=19:10,19:11 --formats=svg');
    return;
  }

  let nodeIds = args.ids.length ? args.ids : [DEFAULT_FRAME_ID];
  if (args.allChildren) {
    const children = await listDirectChildren(args.frame);
    nodeIds = children
      .map((child) => child.id)
      .filter(Boolean);
    if (!nodeIds.length) {
      console.log('No child IDs found to download.');
      return;
    }
    console.log(`\nDownloading ${nodeIds.length} direct child nodes from frame ${args.frame}...`);
  } else if (!args.ids.length) {
    console.log(`No --ids provided, defaulting to frame ${DEFAULT_FRAME_ID}.`);
  }

  await downloadNodeAssets(nodeIds, args.formats, args.scale);
  console.log('Done. Assets saved to:', ASSETS_DIR);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
