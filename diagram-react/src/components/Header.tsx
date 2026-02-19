import { assets } from '../lib/assets';

export type SectionId = 'hero' | 'magician' | 'genius' | 'automator' | 'ui-ai';

const NAV_ITEMS: { href: string; section: SectionId; label: string }[] = [
  { href: '#magician', section: 'magician', label: 'Magician' },
  { href: '#genius', section: 'genius', label: 'Genius' },
  { href: '#automator', section: 'automator', label: 'Automator' },
  { href: '#ui-ai', section: 'ui-ai', label: 'UI-AI' },
];

interface HeaderProps {
  activeSection: SectionId;
  onNavClick: (section: SectionId) => void;
}

export function Header({ activeSection, onNavClick }: HeaderProps) {
  return (
    <header
      id="site-header"
      className="fixed top-0 inset-x-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/[0.07] h-[72px] flex items-center"
    >
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between px-10 py-2">
        <a href="#" className="flex items-center no-underline shrink-0">
          <img
            src={assets.icons.logo}
            alt="Diagram"
            className="h-6 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-0">
          {NAV_ITEMS.map(({ href, section, label }) => {
            const isActive = activeSection === section;
            return (
              <a
                key={section}
                href={href}
                className={`nav-link px-4 py-3 rounded-lg text-sm transition ${
                  isActive ? 'text-white bg-white/[0.06]' : 'text-dim hover:text-white'
                }`}
                data-section={section}
                aria-current={isActive ? 'true' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(section);
                }}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <a
          href="#"
          className="px-4 py-2 rounded-lg text-sm font-medium text-dim hover:text-white transition no-underline"
        >
          Login
        </a>
      </div>
    </header>
  );
}
