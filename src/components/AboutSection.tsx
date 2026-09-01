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
        return <Cloud className="w-5 h-5 text-[#FF9900]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#7DD3FC]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#34D399]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#A78BFA]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#FF9900]" />;
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#07111F] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FF9900]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7DD3FC]/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          highlightWord="About"
          subtitle={about.subtitle}
          alignment="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left Column: Full Editorial Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="rounded-2xl bg-[#0E1B2C]/90 border border-white/10 p-6 sm:p-8 shadow-xl relative backdrop-blur-sm">
              <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-[#101D2E] border border-white/15 rounded-full text-[11px] font-mono text-[#FF9900] uppercase tracking-wider">
                Community Charter
              </div>

              <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-[#A9B7C9] leading-relaxed">
                {about.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? 'text-[#F7FAFC] font-medium text-lg sm:text-xl leading-relaxed'
                        : ''
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-[#34D399]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Student-Led Initiative
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Multi-Cloud Curriculum
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Inclusive to All Branches
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Community Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {about.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="group p-5 sm:p-6 rounded-2xl bg-[#0E1B2C]/70 border border-white/10 hover:border-white/20 hover:bg-[#14243A]/80 transition-all duration-300 shadow-md flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-[#101D2E] border border-white/10 group-hover:scale-110 group-hover:border-[#FF9900]/40 transition-all duration-300 shrink-0">
                  {getPillarIcon(pillar.icon)}
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-[#F7FAFC] group-hover:text-[#FF9900] transition-colors font-['Space_Grotesk']">
                      {pillar.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#A9B7C9]/60">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A9B7C9] leading-relaxed">
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
