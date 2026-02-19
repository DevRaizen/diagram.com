import { assets } from '../lib/assets';
import { SolarSystem } from './SolarSystem';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 pb-0 min-h-[100vh]"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={assets.images.galaxy}
          alt=""
          className="w-full h-full object-cover opacity-60 select-none"
        />
      </div>

      <div className="relative z-10 max-w-[600px] mx-auto text-center pt-16 pb-0 px-4">
        <h1
          className="text-[68px] sm:text-[75px] font-bold leading-[1.15] tracking-[-0.02em] mb-5
                   bg-hero-title bg-clip-text text-transparent"
        >
          Design tools
          <br />
          from the future.
        </h1>
        <p className="text-muted text-[18px] sm:text-[20px] leading-[1.65] font-medium mb-10">
          Unleash your creativity with Diagram's
          <br />
          AI-powered design tools.
        </p>
        <a
          href="#magician"
          className="inline-flex items-center gap-3 px-5 py-3 rounded-full
                  border border-white/[0.12] bg-cta-pill
                  text-white text-sm font-semibold hover:bg-white/10 transition no-underline"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('magician')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          <img
            src={assets.icons.logo}
            alt=""
            className="w-5 h-5 object-contain"
          />
          Explore the future
        </a>
      </div>

      <SolarSystem />
    </section>
  );
}
