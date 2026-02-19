import { assets } from '../lib/assets';

export function SolarSystem() {
  return (
    <div className="relative z-10 mt-8 w-full max-w-[1200px] mx-auto h-[980px] select-none pointer-events-none">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[1200px]"
        style={{ height: 980 }}
      >
        {/* Orbit 01 */}
        <img
          src={assets.icons.orbit01}
          alt=""
          className="absolute opacity-70"
          style={{ width: 266, height: 266, left: 467, top: 357 }}
        />
        {/* Orbit 02 */}
        <img
          src={assets.icons.orbit02}
          alt=""
          className="absolute opacity-70"
          style={{ width: 366, height: 366, left: 417, top: 307 }}
        />
        <img
          src={assets.images.planetBlue}
          alt=""
          className="absolute w-[42px] h-[42px] object-contain"
          style={{ left: 527, top: 322, transform: 'rotate(100deg)' }}
        />
        {/* Orbit 03 */}
        <img
          src={assets.icons.orbit03}
          alt=""
          className="absolute opacity-60"
          style={{ width: 500, height: 500, left: 350, top: 240 }}
        />
        <img
          src={assets.images.planetAutomator}
          alt=""
          className="absolute w-[44px] h-[44px] object-contain"
          style={{ left: 790, top: 226, transform: 'rotate(81deg)' }}
        />
        <img
          src={assets.images.planetAutomatorLogo}
          alt=""
          className="absolute w-[36px] h-[36px] object-contain rounded-full"
          style={{ left: 800, top: 324 }}
        />
        {/* Orbit 04 */}
        <img
          src={assets.icons.orbit04}
          alt=""
          className="absolute opacity-55"
          style={{ width: 650, height: 650, left: 275, top: 165 }}
        />
        <img
          src={assets.images.planetGenius}
          alt=""
          className="absolute w-[56px] h-[56px] object-contain"
          style={{ left: 245, top: 490, transform: 'rotate(38deg)' }}
        />
        <img
          src={assets.images.planetGeniusLogo}
          alt=""
          className="absolute w-[48px] h-[48px] object-contain rounded-full"
          style={{ left: 256, top: 540 }}
        />
        {/* Orbit 05 */}
        <img
          src={assets.icons.orbit05}
          alt=""
          className="absolute opacity-50"
          style={{ width: 820, height: 820, left: 190, top: 80 }}
        />
        <img
          src={assets.images.planetMagician}
          alt=""
          className="absolute w-[60px] h-[60px] object-contain"
          style={{ left: 350, top: 96, transform: 'rotate(52deg)' }}
        />
        <img
          src={assets.images.planetMagicianLogo}
          alt=""
          className="absolute w-[52px] h-[52px] object-contain rounded-full"
          style={{ left: 355, top: 156 }}
        />
        {/* Orbit 06 */}
        <img
          src={assets.icons.orbit06}
          alt=""
          className="absolute opacity-45"
          style={{ width: 950, height: 950, left: 125, top: 15 }}
        />
        <img
          src={assets.images.planetUIAI}
          alt=""
          className="absolute w-[46px] h-[46px] object-contain"
          style={{ left: 904, top: 5, transform: 'rotate(72deg)' }}
        />
        <img
          src={assets.images.planetUIAILogo}
          alt=""
          className="absolute w-[40px] h-[40px] object-contain rounded-full"
          style={{ left: 910, top: 90 }}
        />
        {/* Orbit 07 */}
        <img
          src={assets.icons.orbit07}
          alt=""
          className="absolute opacity-35"
          style={{ width: 1060, height: 1060, left: 70, top: -40 }}
        />
        <img
          src={assets.images.planetBrown}
          alt=""
          className="absolute w-[38px] h-[38px] object-contain"
          style={{ left: 298, top: 60, transform: 'rotate(44deg)' }}
        />
        <img
          src={assets.images.planetBrownRing}
          alt=""
          className="absolute w-[50px] h-[22px] object-contain"
          style={{ left: 288, top: 120, transform: 'rotate(-54deg)' }}
        />
        {/* Orbit 08 */}
        <img
          src={assets.icons.orbit08}
          alt=""
          className="absolute opacity-25"
          style={{ width: 1200, height: 1200, left: 0, top: -110 }}
        />
        <img
          src={assets.images.planetGreen}
          alt=""
          className="absolute w-[33px] h-[33px] object-contain"
          style={{ left: 220, top: 28, transform: 'rotate(77deg)' }}
        />
        <img
          src={assets.images.planetRed}
          alt=""
          className="absolute w-[27px] h-[27px] object-contain"
          style={{ left: 465, top: 490 }}
        />

        {/* Central logo */}
        <div
          className="absolute flex items-center justify-center rounded-full overflow-hidden shadow-lg"
          style={{
            width: 190,
            height: 190,
            left: 505,
            top: 395,
            background: 'linear-gradient(180deg,#ffffff 0%,#cfcfcf 100%)',
          }}
        >
          <img
            src={assets.images.logoCutout}
            alt="Diagram"
            className="w-[72px] h-[140px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
