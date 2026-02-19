import { Fragment } from 'react';
import { assets } from '../../lib/assets';
import { BentoCard } from '../BentoCard';

const TAGS = [assets.icons.uiAiTag3, assets.icons.uiAiTag, assets.icons.uiAiTag2, assets.icons.uiAiTag1];
const EMOJIS = [assets.images.emoji7, assets.images.emoji1, assets.images.emoji4, assets.images.emoji1b];
const WORKFLOWS = [
  { icon: assets.icons.magicianIcon, label: 'Magician' },
  { icon: assets.icons.geniusIcon, label: 'Genius' },
  { icon: assets.icons.automatorIcon, label: 'Automator' },
];

export function UIAISection() {
  return (
    <section id="ui-ai" className="scroll-mt-20 py-24 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-16 text-center">
          <p className="text-dim text-sm font-medium mb-4">All powered by</p>
          <div className="flex justify-center mb-6">
            <div className="relative w-[160px] h-[160px] rounded-2xl border border-white/[0.08] bg-white/[0.04] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-white/[0.03] blur-xl scale-150" aria-hidden />
              <img src={assets.icons.uiAiIcon} alt="UI-AI" className="relative w-24 h-24 object-contain" />
            </div>
          </div>
          <h2 className="text-[48px] md:text-[56px] font-bold leading-tight tracking-tight mb-3 bg-hero-title bg-clip-text text-transparent">
            UI-AI
          </h2>
          <p className="text-muted text-lg mb-4">
            Your AI companion for intelligent design, from concept to final pixel.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {TAGS.map((src, i) => (
              <img key={i} src={src} alt="" className="h-7 object-contain" />
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Boundary-less UI for designers</h3>
              <p className="text-dim text-sm leading-relaxed">
                UI-AI removes constraints so you can design anything you can imagine.
              </p>
            </div>
            <div className="mt-6 flex-1 relative overflow-hidden rounded-xl flex items-center justify-center gap-3">
              <img src={assets.icons.uiImgIcon} alt="" className="w-20 h-20 object-contain" />
              <img src={assets.icons.uiAiToggle} alt="" className="h-12 object-contain" />
            </div>
          </BentoCard>

          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">AI-powered design assistant</h3>
              <p className="text-dim text-sm leading-relaxed">
                Get intelligent design recommendations powered by UI-AI's custom model.
              </p>
            </div>
            <div className="mt-6 flex-1 relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={assets.images.customModelGrid} alt="" className="w-full h-full object-cover opacity-40 pointer-events-none" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center gap-3 p-4">
                <img src={assets.images.aa1} alt="" className="h-20 object-contain" />
                <img src={assets.images.aa2} alt="" className="h-20 object-contain" />
                <img src={assets.images.ny} alt="" className="h-16 object-contain" />
              </div>
            </div>
          </BentoCard>

          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Real-world inspired assets</h3>
              <p className="text-dim text-sm leading-relaxed">
                Generate assets grounded in real-world visuals and brand contexts.
              </p>
            </div>
            <div className="mt-6 flex-1 flex items-center justify-center gap-4">
              {EMOJIS.map((src, i) => (
                <img key={i} src={src} alt="" className="w-16 h-16 object-contain" />
              ))}
            </div>
          </BentoCard>

          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Designed for any workflow</h3>
              <p className="text-dim text-sm leading-relaxed">
                Works seamlessly with Magician, Genius, and Automator.
              </p>
            </div>
            <div className="mt-6 flex-1 flex items-center justify-center gap-5">
              {WORKFLOWS.map((item, i) => (
                <Fragment key={item.label}>
                  <div className="flex flex-col items-center gap-2">
                    <img src={item.icon} alt="" className="w-10 h-10 object-contain" />
                    <span className="text-dim text-xs">{item.label}</span>
                  </div>
                  {i < WORKFLOWS.length - 1 && (
                    <div className="w-px h-8 bg-white/10" />
                  )}
                </Fragment>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
