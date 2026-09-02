import React from 'react';
import { ArrowRight, Calendar, Cloud, Cpu, Layers, Terminal } from 'lucide-react';
import { Container } from './UI/Container';
import { Badge } from './UI/Badge';
import { Button } from './UI/Button';
import { siteContent } from '../content/site';

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { hero } = siteContent;

  const handleNav = (targetPage: string, fallbackHref: string) => (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(targetPage);
    } else {
      window.location.hash = fallbackHref;
    }
  };

  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden flex items-center justify-center bg-cloud-radial">
      {/* Soft ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[260px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[300px] h-[200px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 hero-grid-pattern opacity-25 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Punchy Minimal Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="blue" size="sm" dot={false} className="mb-4 text-xs font-mono">
              {hero.eyebrow}
            </Badge>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#F8FAFC] tracking-tight leading-[1.1] font-['Space_Grotesk']">
              Learn. Build.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Scale in Cloud.
              </span>
            </h1>

            <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-lg">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Button
                href={hero.joinCta.href}
                isExternal
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Join Community
              </Button>

              <Button
                href="#events"
                onClick={handleNav('events', '#events')}
                variant="secondary"
                size="md"
                icon={<Calendar className="w-4 h-4 text-purple-400" />}
                className="w-full sm:w-auto"
              >
                Events
              </Button>
            </div>
          </div>

          {/* Right: Modern Aesthetic Glass Showcase Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl apple-glass border border-white/20 p-5 sm:p-6 shadow-[0_25px_70px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.25)] space-y-4">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <span className="ml-1 text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-blue-400" /> cuj.cloud
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-500/15 px-2 py-0.5 rounded-full border border-blue-400/30 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                    Active Chapter
                  </span>
                </div>

                {/* Minimal Interactive Code Block */}
                <div className="font-mono text-xs bg-[#050811]/80 rounded-2xl p-4 border border-white/10 backdrop-blur-md shadow-inner space-y-1.5">
                  <div className="text-slate-400 text-[11px]">
                    # Get started with student cloud labs
                  </div>
                  <div className="text-blue-400 font-medium">
                    $ <span className="text-indigo-300">npx create-cloud-app@cuj</span>
                  </div>
                </div>

                {/* 3 Aesthetic Apple Glass Cards */}
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="p-3 rounded-2xl apple-glass-subtle hover:border-blue-400/40 hover:bg-white/[0.1] transition-all">
                    <Cloud className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-[#F8FAFC]">Multi-Cloud</div>
                  </div>

                  <div className="p-3 rounded-2xl apple-glass-subtle hover:border-indigo-400/40 hover:bg-white/[0.1] transition-all">
                    <Cpu className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-[#F8FAFC]">DevOps</div>
                  </div>

                  <div className="p-3 rounded-2xl apple-glass-subtle hover:border-purple-400/40 hover:bg-white/[0.1] transition-all">
                    <Layers className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-[#F8FAFC]">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
