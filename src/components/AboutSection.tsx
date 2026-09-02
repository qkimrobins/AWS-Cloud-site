import React from 'react';
import { Cloud, Cpu, Users, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { Container } from './UI/Container';
import { SectionHeading } from './UI/SectionHeading';
import { siteContent } from '../content/site';

export const AboutSection: React.FC = () => {
  const { about } = siteContent;

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-purple-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#080C16] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={about.eyebrow}
          eyebrowVariant="blue"
          title={about.title}
          highlightWord="About"
          subtitle={about.subtitle}
          alignment="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Full Editorial Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="rounded-2xl bg-[#0E1629]/90 border border-white/10 p-6 sm:p-8 shadow-xl relative backdrop-blur-sm">
              <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-[#10192D] border border-white/15 rounded-full text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                Community Charter
              </div>

              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {about.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? 'text-[#F8FAFC] font-medium text-base sm:text-lg leading-relaxed'
                        : ''
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-blue-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> Student-Led Initiative
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Multi-Cloud Curriculum
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" /> Inclusive to All Branches
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Community Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            {about.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="group p-5 rounded-2xl bg-[#0E1629] border border-white/10 hover:border-blue-500/40 hover:bg-[#121B30] transition-all duration-300 shadow-sm flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-[#10192D] border border-white/10 group-hover:scale-105 group-hover:border-blue-500/40 transition-all duration-300 shrink-0">
                  {getPillarIcon(pillar.icon)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-semibold text-[#F8FAFC] group-hover:text-blue-400 transition-colors font-['Space_Grotesk']">
                      {pillar.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
