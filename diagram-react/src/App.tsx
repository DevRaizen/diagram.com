import { useState, useEffect, useCallback } from 'react';
import { Header, type SectionId } from './components/Header';
import { Hero } from './components/Hero';
import { MagicianSection } from './components/sections/MagicianSection';
import { GeniusSection } from './components/sections/GeniusSection';
import { AutomatorSection } from './components/sections/AutomatorSection';
import { UIAISection } from './components/sections/UIAISection';
import { Footer } from './components/Footer';

const SECTION_IDS: SectionId[] = ['hero', 'magician', 'genius', 'automator', 'ui-ai'];

function getActiveSection(headerHeight: number): SectionId {
  const scrollY = window.scrollY + headerHeight + 80;
  let activeId: SectionId = 'hero';
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (el && scrollY >= el.offsetTop) activeId = id;
  }
  return activeId;
}

function scrollToSection(sectionId: SectionId) {
  if (sectionId === 'hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  const updateActiveSection = useCallback(() => {
    const header = document.getElementById('site-header');
    const headerH = header?.offsetHeight ?? 72;
    setActiveSection(getActiveSection(headerH));
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener('scroll', onScroll);
  }, [updateActiveSection]);

  return (
    <div className="min-h-screen bg-bg text-white font-sans antialiased bg-page-glow bg-no-repeat">
      <Header activeSection={activeSection} onNavClick={scrollToSection} />
      <main>
        <Hero />
        <MagicianSection />
        <GeniusSection />
        <AutomatorSection />
        <UIAISection />
      </main>
      <Footer />
    </div>
  );
}
