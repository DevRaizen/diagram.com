import { assets } from '../../lib/assets';
import { BentoCard } from '../BentoCard';

const AUTOMATION_ITEMS = [
  { label: 'Generate Color Palette', color: 'bg-purple-400/40' },
  { label: 'Import Airtable', color: 'bg-blue-400/30' },
  { label: 'Batch resize icons', color: 'bg-green-400/30' },
  { label: 'Outline Spec', color: 'bg-orange-400/30' },
];

const BLOCKS = [
  '', 'Create frame', 'Add shadow', 'Boolean group',
  '', 'Insert instance', 'Create line', 'Flatten',
  '', 'Set position', 'Find', 'Set text case',
  '', 'Reparent', 'Detach', 'Insert image',
];

export function AutomatorSection() {
  return (
    <section id="automator" className="scroll-mt-20 py-24 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-[220px] h-[220px]">
              <div className="absolute inset-0 rounded-full bg-white/[0.04] blur-2xl scale-150" aria-hidden />
              <img src={assets.icons.automatorLogo} alt="" className="relative w-full h-full object-contain" />
            </div>
          </div>
          <h2 className="text-[48px] md:text-[56px] font-bold leading-tight tracking-tight mb-3 bg-hero-title bg-clip-text text-transparent">
            Automator
          </h2>
          <p className="text-muted text-lg mb-6">Automate design tasks in Figma with a single click.</p>
          <a
            href="https://automator.design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.05] text-white text-sm font-semibold hover:bg-white/10 transition no-underline"
          >
            <img src={assets.icons.automatorIcon} alt="" className="w-5 h-5 object-contain" />
            automator.design
          </a>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Automate the busy work away</h3>
              <p className="text-dim text-sm leading-relaxed">
                Automator turns hours of long, tedious busy work into a single click.
              </p>
            </div>
            <div className="mt-6 flex-1 relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#111118] flex">
              <div className="w-[45%] border-r border-white/[0.05] p-3 flex flex-col gap-1">
                {AUTOMATION_ITEMS.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-2 py-1.5 text-[10px] ${i === 0 ? 'text-white/70' : 'text-white/40'}`}
                  >
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    {item.label}
                  </div>
                ))}
              </div>
              <div className="flex-1 p-2 flex gap-2 items-center overflow-hidden">
                <div className="w-28 rounded-xl border border-white/[0.08] bg-white/[0.04] p-2 flex-shrink-0">
                  <img src={assets.images.chair} alt="" className="w-full aspect-square rounded-lg object-cover mb-2 opacity-80" />
                  <div className="text-[9px] text-white/70 font-medium">Madrid chair</div>
                  <div className="text-[9px] text-white/40">$449.00</div>
                  <div className="mt-1 inline-block px-1.5 py-0.5 rounded-full bg-white/[0.08] text-[7px] text-white/50">Chairs</div>
                </div>
                <div className="w-28 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2 flex-shrink-0 opacity-60">
                  <div className="w-full aspect-square rounded-lg bg-white/[0.06] mb-2" />
                  <div className="text-[9px] text-white/50 font-medium">Evee Diningve</div>
                  <div className="text-[9px] text-white/30">$4,100.00</div>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Build any automation</h3>
              <p className="text-dim text-sm leading-relaxed">
                Create custom automations from 100+ actions to run in any Figma file.
              </p>
            </div>
            <div className="mt-6 flex-1 relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#111118] p-3">
              <div className="grid grid-cols-4 gap-1">
                {BLOCKS.map((label, i) => (
                  <div
                    key={i}
                    className={`h-12 rounded-lg border flex items-center justify-center text-[9px] px-1
                      ${label ? 'border-white/[0.08] bg-white/[0.05] text-white/70' : 'border-white/[0.06] bg-white/[0.04] text-white/50'}`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Works with your tools</h3>
              <p className="text-dim text-sm leading-relaxed">
                Connect Figma to Airtable, Notion, Google Sheets and more.
              </p>
            </div>
            <div className="mt-6 flex-1 flex items-center justify-center gap-6">
              <img src={assets.icons.netflix} alt="Netflix" className="w-14 h-14 object-contain opacity-80" />
              <img src={assets.icons.meta} alt="Meta" className="w-14 h-14 object-contain opacity-80" />
              <img src={assets.icons.snapchat} alt="Snapchat" className="w-14 h-14 object-contain opacity-80" />
            </div>
          </BentoCard>

          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Explore community automations</h3>
              <p className="text-dim text-sm leading-relaxed">
                Browse, use, and share automations with the Diagram community.
              </p>
            </div>
            <div className="mt-6 flex-1 relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#111118] p-3">
              <div className="flex gap-4 text-xs mb-3 border-b border-white/[0.06] pb-2">
                <span className="text-white/70 font-medium border-b-2 border-white/60 pb-2 -mb-2">You</span>
                <span className="text-white/30">Team</span>
                <span className="text-white/30">Community</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.05]">
                  <div className="w-4 h-4 rounded-full bg-purple-400/30" />
                  <span className="text-white/60 text-[10px]">Generate Color Palette</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03]">
                  <div className="w-4 h-4 rounded-full bg-blue-400/20" />
                  <span className="text-white/40 text-[10px]">Import Airtable</span>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
