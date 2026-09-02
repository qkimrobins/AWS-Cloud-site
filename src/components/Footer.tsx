import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { Container } from './UI/Container';
import { InstagramIcon, LinkedInIcon, MeetupIcon } from './UI/Icons';
import { siteContent } from '../content/site';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { identity, footer, socialLinks, navigation } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      const page = href.replace('#', '');
      if (onNavigate) {
        e.preventDefault();
        onNavigate(page || 'home');
      }
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <InstagramIcon className="w-3.5 h-3.5" />;
      case 'linkedin':
        return <LinkedInIcon className="w-3.5 h-3.5" />;
      case 'meetup':
        return <MeetupIcon className="w-3.5 h-3.5" />;
      default:
        return <ExternalLink className="w-3.5 h-3.5" />;
    }
  };

  return (
    <footer className="relative bg-[#060A14] border-t border-white/10 pt-10 pb-8 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pb-8 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-2.5">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-[#10192D] border border-white/10 p-1 flex items-center justify-center">
                <img
                  src={identity.logo}
                  alt="Cloud Club Logo"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#F8FAFC] font-['Space_Grotesk'] leading-tight">
                  {identity.name}
                </span>
                <span className="text-[11px] text-slate-400">
                  {identity.university}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              {footer.description}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#F8FAFC] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={handleLinkClick(item.href)}
                    className="hover:text-blue-400 transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community & Social Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#F8FAFC] font-semibold">
              Community Hubs
            </h4>
            <div className="flex flex-wrap md:flex-col gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <span className="p-1.5 rounded-md bg-[#10192D] border border-white/10 text-slate-300">
                    {getSocialIcon(social.platform)}
                  </span>
                  <span className="capitalize">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p className="text-center sm:text-left">{footer.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#10192D] border border-white/10 text-slate-400 hover:text-[#F8FAFC] transition-all text-[11px] font-mono cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 text-blue-400" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
