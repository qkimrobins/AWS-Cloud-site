import React from 'react';
import { ArrowRight, Calendar, Terminal, Cloud, ShieldCheck, Cpu, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from './UI/Container';
import { Badge } from './UI/Badge';
import { Button } from './UI/Button';
import { siteContent } from '../content/site';

export const HeroSection: React.FC = () => {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex items-center justify-center bg-cloud-radial">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF9900]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#7DD3FC]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[250px] bg-[#A78BFA]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 hero-grid-pattern opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="mb-6 inline-flex items-center gap-2">
              <Badge variant="primary" size="md" dot pulse className="shadow-lg">
                {hero.eyebrow}
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F7FAFC] tracking-tight leading-[1.12] font-['Space_Grotesk']">
              Learn • Build • Innovate with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] via-[#FFB84D] to-[#7DD3FC]">
                Cloud Technologies
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-[#A9B7C9] leading-relaxed max-w-2xl font-normal">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href={hero.primaryCta.href}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                {hero.primaryCta.label}
              </Button>

              <Button
                href={hero.secondaryCta.href}
                variant="secondary"
                size="lg"
                icon={<Calendar className="w-5 h-5 text-[#7DD3FC]" />}
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>

            {/* Quick Tech Highlights Pills */}
            <div className="mt-10 pt-8 border-t border-white/10 w-full">
              <p className="text-xs font-mono uppercase tracking-widest text-[#A9B7C9] mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" /> Core Technologies & Platforms
              </p>
              <div className="flex flex-wrap gap-2">
                {hero.techBadges.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-[#101D2E]/80 border border-white/10 text-[#F7FAFC] hover:border-[#FF9900]/50 hover:text-[#FF9900] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Cloud Tech Architecture & Terminal Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#FF9900]/30 via-[#7DD3FC]/20 to-[#A78BFA]/30 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

              {/* Main Terminal / Architecture Card */}
              <div className="relative rounded-2xl bg-[#0B1728] border border-white/15 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#EF4444]/80" />
                    <div className="h-3 w-3 rounded-full bg-[#F59E0B]/80" />
                    <div className="h-3 w-3 rounded-full bg-[#10B981]/80" />
                    <span className="ml-2 text-xs font-mono text-[#A9B7C9] flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#FF9900]" /> aws-cloud-club@cuj:~
                    </span>
                  </div>
                  <Badge variant="cyan" size="sm" className="text-[10px] lowercase">
                    active v1.0
                  </Badge>
                </div>

                {/* Simulated CLI Terminal Output */}
                <div className="font-mono text-xs sm:text-sm space-y-2.5 bg-[#07111F] rounded-xl p-4 border border-white/5 shadow-inner">
                  <div className="text-[#A9B7C9] italic text-[11px] sm:text-xs">
                    {hero.terminalSnippet.comment}
                  </div>
                  <div className="flex items-center gap-2 text-[#F7FAFC] font-semibold">
                    <span className="text-[#FF9900]">$</span>
                    <span className="text-[#FFB84D]">{hero.terminalSnippet.command}</span>
                  </div>

                  <div className="pt-2 space-y-1.5 border-t border-white/5">
                    {hero.terminalSnippet.outputLines.map((line, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#34D399]">
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cloud Ecosystem Grid Visual inside card */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#101D2E]/80 border border-white/5 hover:border-[#FF9900]/30 transition-all group">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#FF9900]/10 text-[#FF9900]">
                        <Cloud className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#F7FAFC]">Cloud Labs</div>
                        <div className="text-[10px] text-[#A9B7C9]">Guided Architecture</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#101D2E]/80 border border-white/5 hover:border-[#7DD3FC]/30 transition-all group">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#7DD3FC]/10 text-[#7DD3FC]">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#F7FAFC]">DevOps CI/CD</div>
                        <div className="text-[10px] text-[#A9B7C9]">Container Workflows</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#101D2E]/80 border border-white/5 hover:border-[#34D399]/30 transition-all group">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#34D399]/10 text-[#34D399]">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#F7FAFC]">Projects</div>
                        <div className="text-[10px] text-[#A9B7C9]">Real-world Building</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#101D2E]/80 border border-white/5 hover:border-[#A78BFA]/30 transition-all group">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#A78BFA]/10 text-[#A78BFA]">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#F7FAFC]">Certs & Mentorship</div>
                        <div className="text-[10px] text-[#A9B7C9]">Industry Readiness</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Ribbon */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#A9B7C9] font-mono">
                  <span className="flex items-center gap-1.5 text-[#34D399]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> University Chapter Verified
                  </span>
                  <span>CUJ • Jammu, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
