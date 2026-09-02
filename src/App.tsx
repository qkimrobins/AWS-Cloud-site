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
    <div className="min-h-screen bg-[#080C16] text-[#F8FAFC] selection:bg-blue-600/30 selection:text-white flex flex-col font-sans relative">
      {/* Apple VisionOS Dynamic Aurora Lighting for Glassmorphism Depth */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/4 w-[650px] h-[650px] bg-gradient-to-br from-blue-600/15 via-indigo-600/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-1/4 -right-28 w-[550px] h-[550px] bg-gradient-to-bl from-purple-600/12 via-fuchsia-600/8 to-transparent blur-[150px] rounded-full" />
        <div className="absolute top-2/3 -left-28 w-[550px] h-[550px] bg-gradient-to-tr from-sky-500/10 via-blue-600/8 to-transparent blur-[140px] rounded-full" />
        <div className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-indigo-600/12 via-purple-600/8 to-transparent blur-[150px] rounded-full" />
      </div>

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
