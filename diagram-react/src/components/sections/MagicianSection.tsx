import { assets } from '../../lib/assets';
import { BentoCard } from '../BentoCard';

export function MagicianSection() {
  const iconGrid = [
    assets.icons.ufo,
    assets.icons.alien,
    assets.icons.planetIcon,
    assets.icons.rocket,
    assets.icons.ufo1,
    assets.icons.planetGray,
    assets.icons.planetBlue,
  ];
  const iconGridRow2 = [
    assets.icons.ufo,
    assets.icons.alien,
    assets.icons.planetIcon,
    assets.icons.rocket,
    assets.icons.ufo1,
    assets.icons.magicianIcon,
    assets.icons.sparkle,
    assets.icons.imageIcon,
  ];

  return (
    <section id="magician" className="scroll-mt-20 py-24 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <h2
              className="text-[56px] font-bold leading-tight tracking-tight
                       bg-hero-title bg-clip-text text-transparent"
            >
              Magician
            </h2>
          </div>
          <p className="text-muted text-lg mb-6">
            Cast a spell on your Figma designs.
          </p>
          <a
            href="https://magician.design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.1]
                    bg-white/[0.05] text-white text-sm font-semibold hover:bg-white/10 transition no-underline"
          >
            <img
              src={assets.icons.magicianIcon}
              alt=""
              className="w-5 h-5 object-contain"
            />
            magician.design
          </a>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          <BentoCard>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Design with AI magic</h3>
              <p className="text-dim text-sm leading-relaxed">
                Unlock your creativity and bring ideas to life with AI-powered
                design utilities.
              </p>
            </div>
            <div className="mt-6 flex-1 relative flex items-end justify-center">
              <div className="relative">
                <img
                  src={assets.icons.magicianIcon}
                  alt=""
                  className="w-14 h-14 object-contain shrink-0"
                />
                <img
                  src={assets.images.magician}
                  alt=""
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
          </BentoCard>

          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">
                Generate SVG icons for anything
              </h3>
              <p className="text-dim text-sm leading-relaxed">
                Magic Icon generates infinitely scalable SVG icons to use
                anywhere in your design.
              </p>
            </div>
            <div className="mt-6 flex-1 relative overflow-hidden rounded-xl bg-white/[0.04] flex items-center justify-center p-4">
              <div className="grid grid-cols-7 gap-2">
                {iconGrid.map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center"
                  >
                    <img src={src} alt="" className="w-6 h-6 object-contain" />
                  </div>
                ))}
                {iconGridRow2.map((src, i) => (
                  <div
                    key={`r2-${i}`}
                    className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center"
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-6 h-6 object-contain opacity-60"
                    />
                  </div>
                ))}
                {Array.from({ length: 7 }, (_, i) => (
                  <div
                    key={`r3-${i}`}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      i === 0 ? 'bg-white/[0.03] opacity-30' : 'bg-white/[0.03] opacity-30'
                    }`}
                  >
                    {i === 0 && (
                      <img
                        src={assets.icons.planetGray}
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">
                Conjure up creativity
              </h3>
              <p className="text-dim text-sm leading-relaxed">
                Magician demystifies the creative process by magically turning
                your ideas into assets.
              </p>
            </div>
            <div className="mt-6 flex-1 relative flex items-center justify-center">
              <div className="w-[120px] h-[120px] rounded-2xl border border-white/[0.12] bg-white/[0.06] flex items-center justify-center shadow-inner overflow-hidden">
                <img
                  src={assets.icons.magicImageIcon}
                  alt=""
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="absolute -bottom-2 -left-2 w-[52px] h-[52px] rounded-xl border border-white/[0.1] bg-white/[0.06] flex items-center justify-center">
                <img
                  src={assets.icons.sparkle}
                  alt=""
                  className="w-7 h-7 object-contain"
                />
              </div>
            </div>
          </BentoCard>

          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">
                Generate magical visuals for your designs
              </h3>
              <p className="text-dim text-sm leading-relaxed">
                With Magic Image, you can quickly generate images in Figma while
                you design.
              </p>
            </div>
            <div className="mt-6 flex-1 relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute left-[8%] top-[10%] w-[38%] aspect-square rounded-2xl border border-white/[0.1] bg-white/[0.06] shadow-lg overflow-hidden">
                    <img
                      src={assets.images.magicImageImg1}
                      alt=""
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  <div className="absolute left-[30%] top-[22%] w-[36%] aspect-square rounded-2xl border border-white/[0.12] bg-white/[0.07] shadow-xl overflow-hidden">
                    <img
                      src={assets.icons.magicImageIcon}
                      alt=""
                      className="w-full h-full object-contain p-8"
                    />
                  </div>
                  <div className="absolute right-[6%] top-[8%] w-[34%] aspect-square rounded-2xl border border-white/[0.08] bg-white/[0.04] shadow-md overflow-hidden">
                    <img
                      src={assets.icons.magicImageIcon1}
                      alt=""
                      className="w-full h-full object-contain p-8 opacity-70"
                    />
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">
                Wave goodbye to Lorem Ipsum
              </h3>
              <p className="text-dim text-sm leading-relaxed">
                Magic Copy writes, edits, and rewrites Figma text layers so you
                can design with real copy.
              </p>
            </div>
            <div className="mt-6 flex-1 relative overflow-hidden rounded-xl bg-white/[0.04] p-4">
              <p className="text-white/40 text-xs leading-relaxed font-mono">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam...
              </p>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={assets.images.genButtonStars}
                  alt=""
                  className="w-full h-full object-contain opacity-50 pointer-events-none"
                />
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">Your AI spellbook</h3>
              <p className="text-dim text-sm leading-relaxed">
                Get all the latest AI design advancements + future spells in one
                convenient plugin.
              </p>
            </div>
            <div className="mt-6 flex-1 relative flex items-end justify-center pb-2">
              <div className="relative w-[120px]">
                <img
                  src={assets.images.cover}
                  alt="Spellbook"
                  className="w-full rounded-lg shadow-2xl"
                />
                <img
                  src={assets.images.spellbookTitle}
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain rounded-lg opacity-80"
                />
              </div>
            </div>
          </BentoCard>

          <BentoCard colSpan={2}>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">
                Magically rename your layers
              </h3>
              <p className="text-dim text-sm leading-relaxed">
                Magic Rename intelligently names your layers so you can spend
                more time designing.
              </p>
            </div>
            <div className="mt-6 flex-1 relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#111118]">
              <img
                src={assets.images.geniusFigmaGrain}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
              />
              <div className="flex h-full">
                <div className="w-[52%] border-r border-white/[0.06] p-3 flex flex-col gap-1 text-xs">
                  <div className="px-2 py-1.5 rounded-md bg-white/[0.06] text-white/70 flex items-center gap-2">
                    <span className="text-white/30">▼</span> Frame 2147223044
                  </div>
                  <div className="px-2 py-1.5 pl-5 rounded-md text-white/40 flex items-center gap-2 hover:bg-white/[0.04]">
                    <span className="text-white/20">▼</span> Frame 2147223043
                  </div>
                  <div className="px-2 py-1.5 pl-5 rounded-md text-white/40 flex items-center gap-2 hover:bg-white/[0.04]">
                    <span className="text-white/20">▼</span> Frame 2147223035
                  </div>
                  <div className="px-2 py-1.5 rounded-md text-white/40 flex items-center gap-2 hover:bg-white/[0.04]">
                    <span className="text-white/30">▼</span> Frame 2147223040
                  </div>
                </div>
                <div className="w-[48%] p-3 flex items-center justify-center">
                  <div className="w-full h-[80%] rounded-lg border border-white/[0.08] bg-white/[0.04] flex flex-col gap-2 p-2">
                    <div className="h-2 w-3/4 rounded bg-white/[0.12]" />
                    <div className="h-2 w-1/2 rounded bg-white/[0.08]" />
                    <div className="h-6 w-full rounded bg-white/[0.06] mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <div className="mb-auto">
              <h3 className="font-semibold text-base mb-2">
                Figma's new AI bestie
              </h3>
              <p className="text-dim text-sm leading-relaxed">
                Magician works right inside your favorite design tool.
              </p>
            </div>
            <div className="mt-6 flex-1 relative flex items-center justify-center">
              <div className="grid grid-cols-2 gap-1 w-[100px]">
                {[
                  ['#1abcfe', 'bg-[#1abcfe]/20', 'bg-[#1abcfe]/60'],
                  ['#ff7262', 'bg-[#ff7262]/20', 'bg-[#ff7262]/60'],
                  ['#a259ff', 'bg-[#a259ff]/20', 'bg-[#a259ff]/60'],
                  ['#0acf83', 'bg-[#0acf83]/20', 'bg-[#0acf83]/60'],
                  ['#f24e1e', 'bg-[#f24e1e]/20', 'bg-[#f24e1e]/60'],
                ].map(([, box, dot], i) => (
                  <div
                    key={i}
                    className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                      i === 4 ? 'col-span-2 w-11 h-11 mx-auto' : ''
                    } ${box}`}
                  >
                    <div className={`w-5 h-5 rounded-full ${dot}`} />
                  </div>
                ))}
              </div>
              <img
                src={assets.images.sparklePng}
                alt=""
                className="absolute right-4 bottom-4 w-12 h-12 object-contain opacity-80"
              />
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
