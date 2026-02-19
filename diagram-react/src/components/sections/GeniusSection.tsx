import { assets } from '../../lib/assets';
import { BentoCard } from '../BentoCard';

export function GeniusSection() {
  return (
    <section id="genius" className="scroll-mt-20 py-24 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px]">
              <div className="absolute inset-0 rounded-full bg-white/[0.04] blur-2xl scale-150" aria-hidden />
              <div className="relative w-full h-full flex items-center justify-center">
                <img src={assets.icons.orbit01} alt="" className="absolute w-full h-full opacity-40 object-contain" />
                <img src={assets.icons.orbit02} alt="" className="absolute w-[85%] h-[85%] opacity-30 object-contain" />
                <img src={assets.icons.geniusIcon} alt="" className="relative w-20 h-20 md:w-28 md:h-28 object-contain z-10" />
              </div>
            </div>
          </div>
          <h2 className="text-[48px] md:text-[56px] font-bold leading-tight tracking-tight mb-3 bg-hero-title bg-clip-text text-transparent">
            Genius
          </h2>
          <p className="text-muted text-lg mb-6">Your AI design companion in Figma.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://genius.design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.05] text-white text-sm font-semibold hover:bg-white/10 transition no-underline"
            >
              <img src={assets.icons.geniusIconSmall} alt="" className="w-5 h-5 object-contain" />
              genius.design
            </a>
            <span className="px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.04] text-dim text-xs font-medium">
              Coming soon
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Transforms your ideas into designs</h3>
              <p className="text-dim text-sm leading-relaxed">
                Genius creates fully-editable UI designs with just a simple product description.
              </p>
            </div>
            <div className="mt-6 flex-1 relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <img src={assets.icons.orbit05} alt="" className="absolute w-[500px] h-[500px] opacity-10 -translate-y-8" />
                <img src={assets.icons.orbit04} alt="" className="absolute w-[380px] h-[380px] opacity-15 -translate-y-8" />
                <img src={assets.icons.orbit03} alt="" className="absolute w-[260px] h-[260px] opacity-20 -translate-y-8" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl border border-white/[0.12] bg-[#111118]/90 px-4 py-3">
                <img src={assets.icons.geniusIcon} alt="" className="w-5 h-5 object-contain shrink-0" />
                <span className="text-white/50 text-sm flex-1">An app to book intergalactic travel</span>
                <button className="px-3 py-1 rounded-lg text-xs font-semibold text-white bg-white/[0.12] hover:bg-white/20 transition relative overflow-hidden">
                  <img src={assets.images.genButtonStars} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none" />
                  <span className="relative">Generate</span>
                </button>
              </div>
            </div>
          </BentoCard>

          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Auto-suggests as you design</h3>
              <p className="text-dim text-sm leading-relaxed">
                Improve your workflow and design more efficiently with AI-powered in-line suggestions.
              </p>
            </div>
            <div className="mt-6 flex-1 relative flex items-center justify-center overflow-hidden">
              <div className="w-[180px] rounded-2xl border border-white/[0.1] bg-[#111118] overflow-hidden shadow-2xl">
                <div className="h-7 bg-white/[0.06] flex items-center px-3 gap-1">
                  <div className="w-12 h-2 rounded bg-white/30" />
                </div>
                <div className="p-2">
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white/[0.06] mb-2">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-20 h-2 rounded bg-white/20" />
                  </div>
                  <div className="flex gap-2 px-1 mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[8px]">Pizza</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/[0.06] text-white/40 text-[8px]">Salad</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/[0.06] text-white/40 text-[8px]">Chicken</span>
                  </div>
                  <div className="relative h-[100px] flex items-center justify-center">
                    <img src={assets.images.foodStars} alt="" className="w-full h-full object-contain opacity-70" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-20">
                <img src={assets.icons.orbit03} alt="" className="w-40 h-40" />
              </div>
            </div>
          </BentoCard>

          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Iterates on designs to unlock new possibilities</h3>
              <p className="text-dim text-sm leading-relaxed">
                Genius iterates on your designs for you to explore new design directions during your process.
              </p>
            </div>
            <div className="mt-6 flex-1 relative flex items-center justify-center overflow-hidden gap-4">
              <div className="w-[44%] h-[70%] min-h-[160px] rounded-xl border border-white/[0.06] bg-[#111118] p-3 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-3 rounded bg-white/20" />
                  <div className="ml-auto w-5 h-5 rounded-full bg-white/10" />
                </div>
                <div className="flex gap-2 mt-1">
                  <div className="w-12 h-12 rounded-lg bg-white/[0.08]" />
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="h-2 w-full rounded bg-white/20" />
                    <div className="h-2 w-3/4 rounded bg-white/10" />
                    <div className="h-2 w-1/2 rounded bg-white/10" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 shrink-0">
                <div className="relative">
                  <img src={assets.images.iterateButtonOrbit} alt="" className="absolute -inset-3 w-[88px] h-[56px] object-contain opacity-60" />
                  <button className="relative px-4 py-2 rounded-lg text-xs font-semibold text-white bg-white/[0.1] border border-white/[0.12] overflow-hidden">
                    <img src={assets.images.genButtonStars} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />
                    <span className="relative">Iterate</span>
                  </button>
                </div>
              </div>
              <div className="w-[44%] h-[70%] min-h-[160px] rounded-xl border border-white/[0.12] bg-[#111118] p-3 flex flex-col gap-2 ring-1 ring-purple-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-3 rounded bg-purple-400/30" />
                  <div className="ml-auto w-5 h-5 rounded-full bg-purple-400/20" />
                </div>
                <div className="flex gap-2 mt-1">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10" />
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="h-2 w-full rounded bg-purple-400/30" />
                    <div className="h-2 w-3/4 rounded bg-purple-400/20" />
                    <div className="h-2 w-1/2 rounded bg-purple-400/20" />
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Leverages any design system</h3>
              <p className="text-dim text-sm leading-relaxed">
                Genius leverages any design system to provide smart recommendations.
              </p>
            </div>
            <div className="mt-6 flex-1 relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#111118]">
              <img src={assets.images.dsCardBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none" />
              <div className="p-4 flex flex-col gap-3">
                <div className="flex gap-1">
                  <button className="px-3 py-1.5 rounded-lg bg-white/[0.12] text-white text-xs font-medium">Orb</button>
                  <button className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-white/40 text-xs">Gas</button>
                  <button className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-white/40 text-xs">Pod</button>
                </div>
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-3 flex gap-3 items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.1] flex-shrink-0" />
                  <div>
                    <div className="text-white text-sm font-medium">Orb</div>
                    <div className="text-white/40 text-xs">/ɔrb/ · a spherical body</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={assets.icons.dsToggle} alt="" className="h-6 object-contain" />
                  <img src={assets.icons.dsToggle1} alt="" className="h-6 object-contain" />
                  <div className="ml-auto flex gap-1">
                    <button className="px-3 py-1 rounded-lg bg-white/[0.08] text-white text-xs">Launch</button>
                    <button className="px-3 py-1 rounded-lg bg-white/[0.04] text-white/40 text-xs">Abort</button>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Powered by UI-AI</h3>
              <p className="text-dim text-sm">An AI model for designers.</p>
            </div>
            <div className="mt-6 flex-1 relative flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-[220px] h-[220px] rounded-full border border-white/[0.06]" />
                <div className="absolute w-[175px] h-[175px] rounded-full border border-white/[0.07]" />
                <div className="absolute w-[130px] h-[130px] rounded-full border border-white/[0.09]" />
                <div className="absolute w-[85px] h-[85px] rounded-full border border-white/[0.12]" />
                <div className="w-[70px] h-[70px] rounded-2xl border border-white/[0.15] bg-white/[0.06] flex items-center justify-center overflow-hidden shadow-lg">
                  <img src={assets.images.uiAiMetalIcon} alt="" className="w-10 h-10 object-contain" />
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Uses Smart Elements</h3>
              <p className="text-dim text-sm leading-relaxed">
                Set the structure, then describe the UI to have Genius design it.
              </p>
            </div>
            <div className="mt-6 flex-1 flex flex-col gap-2">
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-3 flex items-center gap-2">
                <img src={assets.images.geniusLogo} alt="" className="w-4 h-4 object-contain rounded-sm shrink-0" />
                <span className="text-white/70 text-xs">Product filters</span>
                <div className="ml-auto flex gap-0.5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-white/30" />
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-3 flex items-center gap-2">
                <img src={assets.images.geniusLogo} alt="" className="w-4 h-4 object-contain rounded-sm shrink-0 opacity-60" />
                <span className="text-white/40 text-xs">iOS status bar</span>
                <div className="ml-auto flex gap-0.5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Invite to any Figma file</h3>
              <p className="text-dim text-sm leading-relaxed">
                Invite Genius to any file to get a personal design assistant.
              </p>
            </div>
            <div className="mt-6 flex-1 relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#111118]">
              <img src={assets.images.geniusFigmaGrain} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
              <div className="p-3 flex flex-col h-full">
                <div className="h-8 bg-white/[0.04] rounded-lg mb-2 flex items-center px-3 gap-2">
                  <div className="w-20 h-2 rounded bg-white/20" />
                </div>
                <div className="flex gap-2 mt-1">
                  <div className="w-7 h-7 rounded-full bg-purple-500/30 ring-1 ring-purple-400/40 flex items-center justify-center text-[9px] text-purple-300">N</div>
                  <div className="w-7 h-7 rounded-full bg-blue-500/30 ring-1 ring-blue-400/40 flex items-center justify-center text-[9px] text-blue-300">Y</div>
                  <div className="ml-auto">
                    <button className="px-2 py-1 rounded-lg bg-white/[0.08] text-white text-[9px] font-medium relative overflow-hidden">
                      <img src={assets.images.shareButtonStars} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none" />
                      <span className="relative">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Chat with Genius</h3>
              <p className="text-dim text-sm leading-relaxed">
                Genius can consult and act on any design-related questions.
              </p>
            </div>
            <div className="mt-6 flex-1 relative flex flex-col justify-end overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={assets.icons.orbit01} alt="" className="absolute w-[90px] h-[90px] opacity-15" />
                <img src={assets.icons.orbit01} alt="" className="absolute w-[140px] h-[140px] opacity-10" />
                <img src={assets.icons.orbit01} alt="" className="absolute w-[200px] h-[200px] opacity-8" />
              </div>
              <div className="relative rounded-2xl border border-white/[0.1] bg-[#111118]/80 px-4 py-3 mb-3 text-sm text-white/80">
                How can I help?
              </div>
              <div className="relative rounded-2xl border border-white/[0.1] bg-[#111118]/80 px-3 py-2.5 flex items-center gap-2">
                <span className="text-white/40 text-xs flex-1">Default iOS button size?</span>
                <button className="w-7 h-7 rounded-lg bg-white/[0.1] flex items-center justify-center relative overflow-hidden shrink-0">
                  <img src={assets.images.sendButtonStars} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none" />
                  <svg className="relative w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
