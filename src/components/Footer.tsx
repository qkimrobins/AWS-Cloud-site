import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { Container } from './UI/Container';
import { InstagramIcon, LinkedInIcon, MeetupIcon } from './UI/Icons';
import { siteContent } from '../content/site';

export const Footer: React.FC = () => {
  const { identity, footer, socialLinks, navigation } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <InstagramIcon className="w-5 h-5" />;
      case 'linkedin':
        return <LinkedInIcon className="w-5 h-5" />;
      case 'meetup':
        return <MeetupIcon className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <footer className="relative bg-[#050C16] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FF9900]/40 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Mission Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#101D2E] border border-white/10 p-1.5 flex items-center justify-center">
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
                <span className="text-base font-bold text-[#F7FAFC] font-['Space_Grotesk'] leading-tight">
                  {identity.name}
                </span>
                <span className="text-xs text-[#A9B7C9]">
                  {identity.university}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A9B7C9] leading-relaxed max-w-md">
              {footer.description}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F7FAFC] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#A9B7C9]">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#FF9900] transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteContent.hero.joinCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9900] transition-colors inline-flex items-center gap-1 text-[#FF9900]"
                >
                  Join Us <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Social Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F7FAFC] font-semibold">
              Community Channels
            </h4>
            <div className="flex flex-col space-y-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="inline-flex items-center gap-2.5 text-sm text-[#A9B7C9] hover:text-[#FF9900] transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-[#101D2E] border border-white/10 group-hover:border-[#FF9900]/40 group-hover:text-[#FF9900] transition-all">
                    {getSocialIcon(social.platform)}
                  </span>
                  <span className="capitalize font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9B7C9]">
          <p className="text-center sm:text-left">{footer.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#101D2E] border border-white/10 text-[#A9B7C9] hover:text-[#F7FAFC] hover:border-[#FF9900]/40 transition-all text-xs font-mono cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF9900]" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
