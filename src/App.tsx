import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeatureGrid } from './components/FeatureGrid';
import { EventsSection } from './components/EventsSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#07111F] text-[#F7FAFC] selection:bg-[#FF9900]/30 selection:text-white flex flex-col font-sans">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#FF9900] text-[#07111F] font-bold rounded-lg shadow-xl"
      >
        Skip to main content
      </a>

      {/* Fixed Sticky Header */}
      <SiteHeader />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <FeatureGrid />
        <EventsSection />
        <TeamSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default App;
