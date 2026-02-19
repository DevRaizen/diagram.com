import { assets } from '../lib/assets';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-4 sm:px-6 py-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-block mb-4">
              <img src={assets.icons.logo} className="h-6 w-auto object-contain" alt="Diagram" />
            </a>
            <p className="text-dim text-sm mb-6">Design tools from the future.</p>
            <a
              href="#"
              className="inline-block px-4 py-2 rounded-lg border border-white/[0.1] bg-white/[0.04] text-sm font-medium text-white hover:bg-white/10 transition no-underline"
            >
              Join the future
            </a>
          </div>
          <div>
            <strong className="block text-sm font-semibold text-white mb-4">Products</strong>
            <a href="#genius" className="block text-dim text-sm no-underline hover:text-white py-2 transition">Genius</a>
            <a href="#magician" className="block text-dim text-sm no-underline hover:text-white py-2 transition">Magician</a>
            <a href="#automator" className="block text-dim text-sm no-underline hover:text-white py-2 transition">Automator</a>
            <a href="#ui-ai" className="block text-dim text-sm no-underline hover:text-white py-2 transition">UI-AI</a>
          </div>
          <div>
            <strong className="block text-sm font-semibold text-white mb-4">Company</strong>
            <a href="#" className="block text-dim text-sm no-underline hover:text-white py-2 transition">About</a>
            <a href="#" className="block text-dim text-sm no-underline hover:text-white py-2 transition">Careers</a>
            <a href="#" className="block text-dim text-sm no-underline hover:text-white py-2 transition">Blog</a>
            <a href="#" className="block text-dim text-sm no-underline hover:text-white py-2 transition">Contact</a>
          </div>
          <div>
            <strong className="block text-sm font-semibold text-white mb-4">Legal</strong>
            <a href="#" className="block text-dim text-sm no-underline hover:text-white py-2 transition">Privacy</a>
            <a href="#" className="block text-dim text-sm no-underline hover:text-white py-2 transition">Terms</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-dim text-sm">©2023 Diagram Technologies, Inc.</p>
          <div className="flex items-center gap-2">
            <a href="#" className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.1] transition" aria-label="Twitter">
              <img src={assets.icons.twitter} className="w-5 h-5 object-contain" alt="" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.1] transition" aria-label="Read.cv">
              <img src={assets.icons.readcv} className="w-5 h-5 object-contain" alt="" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.1] transition" aria-label="Discord">
              <img src={assets.icons.discord} className="w-5 h-5 object-contain" alt="" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.1] transition" aria-label="Instagram">
              <img src={assets.icons.instagram} className="w-5 h-5 object-contain" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
