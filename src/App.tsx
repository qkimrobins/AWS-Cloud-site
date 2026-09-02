import { useState, useEffect } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WhyJoinPage } from './pages/WhyJoinPage';
import { EventsPage } from './pages/EventsPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const getPageFromHash = (): string => {
    const hash = window.location.hash.replace('#', '').replace('/', '');
    const validPages = ['home', 'about', 'why-join', 'events', 'team', 'contact'];
    if (validPages.includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getPageFromHash);

  // Sync state when browser back/forward or hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'why-join':
        return <WhyJoinPage onNavigate={navigateTo} />;
      case 'events':
        return <EventsPage onNavigate={navigateTo} />;
      case 'team':
        return <TeamPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'home':
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#080C16] text-[#F8FAFC] selection:bg-blue-600/30 selection:text-white flex flex-col font-sans">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-xl"
      >
        Skip to main content
      </a>

      {/* Fixed Sticky Header */}
      <SiteHeader currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Site Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
