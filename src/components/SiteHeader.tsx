import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { Container } from './UI/Container';
import { Button } from './UI/Button';
import { siteContent } from '../content/site';

interface SiteHeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll detection for sticky glass styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNav = (targetPage: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(targetPage);
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'apple-glass-nav py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#home"
              onClick={handleNav('home')}
              className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl p-1 -ml-1 transition-transform active:scale-95 cursor-pointer"
              aria-label="Central University of Jammu Cloud Club Home"
            >
              <div className="relative flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-2xl apple-glass-subtle p-1.5 shadow-md group-hover:border-blue-400/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                <img
                  src={siteContent.identity.logo}
                  alt="Cloud Club Logo"
                  className="h-full w-full object-contain rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.fallback-icon')) {
                      const icon = document.createElement('div');
                      icon.className = 'fallback-icon text-blue-400 font-bold';
                      icon.innerHTML = '☁';
                      parent.appendChild(icon);
                    }
                  }}
                />
              </div>

              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold text-[#F8FAFC] tracking-tight group-hover:text-blue-400 transition-colors font-['Space_Grotesk'] leading-tight flex items-center gap-1.5">
                  AWS Student Builder Group
                </span>
                <span className="text-[11px] sm:text-xs text-[#94A3B8] font-medium tracking-wide">
                  Central University of Jammu
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - Apple Glass Pill Island */}
            <nav
              className="hidden md:flex items-center gap-1 apple-glass-nav rounded-full px-3.5 py-1.5"
              aria-label="Main Navigation"
            >
              {siteContent.navigation.map((item) => {
                const pageKey = item.href.replace('#', '') || 'home';
                const isActive = currentPage === pageKey;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleNav(pageKey)}
                    className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${
                      isActive
                        ? 'text-white bg-white/[0.14] border border-white/25 shadow-[0_2px_10px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.25)] font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.08] border border-transparent'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* CTA & Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                href={siteContent.hero.joinCta.href}
                isExternal
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="w-4 h-4" />}
                className="font-semibold"
              >
                Join Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={siteContent.hero.joinCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-md"
              >
                Join
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl apple-glass-subtle text-[#F8FAFC] hover:text-blue-400 hover:border-blue-400/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Navigation Modal */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fade-in">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#080C16]/80 backdrop-blur-2xl transition-opacity"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="fixed inset-x-4 top-20 bottom-8 max-h-[80vh] rounded-3xl apple-glass border border-white/20 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.25)] flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Navigation
                </span>
                <span className="text-xs font-mono text-blue-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> CUJ Cloud Club
                </span>
              </div>

              <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
                {siteContent.navigation.map((item) => {
                  const pageKey = item.href.replace('#', '') || 'home';
                  const isActive = currentPage === pageKey;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={handleNav(pageKey)}
                      className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-2xl transition-all border cursor-pointer ${
                        isActive
                          ? 'text-white bg-white/[0.14] border-white/25 shadow-sm'
                          : 'text-[#F8FAFC] hover:text-blue-400 hover:bg-white/[0.08] border-transparent'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-slate-400 font-mono">→</span>
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <Button
                href={siteContent.hero.joinCta.href}
                isExternal
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Join AWS Student Builder Group
              </Button>
              <p className="text-center text-[11px] text-slate-400">
                Central University of Jammu • Technical Community
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
