import React from 'react';
import { ArrowRight, Users, BookOpen, ShieldCheck, Award, Calendar, ArrowUpRight, Cloud, Cpu, Layers } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { Container } from '../components/UI/Container';
import { Button } from '../components/UI/Button';
import { Badge } from '../components/UI/Badge';
import { siteContent } from '../content/site';
import { events } from '../content/events';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { hero } = siteContent;
  const latestEvent = events[events.length - 1];

  return (
    <div className="animate-fade-in">
      {/* Minimal Aesthetic Hero */}
      <HeroSection onNavigate={onNavigate} />

      {/* Minimal Stats Bar */}
      <section className="border-y border-white/10 bg-[#0A0F1D]/60 py-5 backdrop-blur-sm relative z-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
            <div className="space-y-0.5">
              <div className="text-lg sm:text-2xl font-bold text-[#F8FAFC] font-mono flex items-center justify-center gap-1.5">
                <Users className="w-4 h-4 text-blue-400" />
                <span>200+</span>
              </div>
              <p className="text-[11px] text-slate-400">Student Builders</p>
            </div>

            <div className="space-y-0.5">
              <div className="text-lg sm:text-2xl font-bold text-[#F8FAFC] font-mono flex items-center justify-center gap-1.5">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Multi-Cloud</span>
              </div>
              <p className="text-[11px] text-slate-400">AWS • Azure • GCP</p>
            </div>

            <div className="space-y-0.5">
              <div className="text-lg sm:text-2xl font-bold text-[#F8FAFC] font-mono flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>100% Free</span>
              </div>
              <p className="text-[11px] text-slate-400">Zero Membership Fees</p>
            </div>

            <div className="space-y-0.5">
              <div className="text-lg sm:text-2xl font-bold text-[#F8FAFC] font-mono flex items-center justify-center gap-1.5">
                <Award className="w-4 h-4 text-sky-400" />
                <span>Mentorship</span>
              </div>
              <p className="text-[11px] text-slate-400">Certs & Placements</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3 Aesthetic Pillars Showcase (Minimal Text, High Visual Impact) */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-8 md:mb-10">
            <Badge variant="blue" size="sm" dot={false} className="mb-2 text-xs font-mono">
              What We Do
            </Badge>
            <h2 className="text-xl sm:text-3xl font-bold text-[#F8FAFC] font-['Space_Grotesk']">
              Build Real Systems.
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
              Hands-on cloud engineering for university students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {/* Bento Card 1 */}
            <div
              onClick={() => onNavigate('why-join')}
              className="group p-5 sm:p-6 rounded-2xl bg-[#0E1629] border border-white/10 hover:border-blue-500/40 hover:bg-[#121B30] transition-all cursor-pointer flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-[#10192D] border border-white/10 text-blue-400 w-fit mb-3 group-hover:scale-105 transition-transform">
                  <Cloud className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#F8FAFC] group-hover:text-blue-400 transition-colors font-['Space_Grotesk']">
                  Hands-On Cloud Labs
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Experiment with AWS, Azure, GCP, and Docker containers in guided workshops.
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                <span>Explore Benefits</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>

            {/* Bento Card 2 */}
            <div
              onClick={() => onNavigate('events')}
              className="group p-5 sm:p-6 rounded-2xl bg-[#0E1629] border border-white/10 hover:border-indigo-500/40 hover:bg-[#121B30] transition-all cursor-pointer flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-[#10192D] border border-white/10 text-indigo-400 w-fit mb-3 group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#F8FAFC] group-hover:text-indigo-400 transition-colors font-['Space_Grotesk']">
                  Workshops & Hackathons
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Collaborate in student hackathon teams, attend speaker AMAs, and ship code.
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform">
                <span>View Event Hub</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>

            {/* Bento Card 3 */}
            <div
              onClick={() => onNavigate('about')}
              className="group p-5 sm:p-6 rounded-2xl bg-[#0E1629] border border-white/10 hover:border-purple-500/40 hover:bg-[#121B30] transition-all cursor-pointer flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-[#10192D] border border-white/10 text-purple-400 w-fit mb-3 group-hover:scale-105 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#F8FAFC] group-hover:text-purple-400 transition-colors font-['Space_Grotesk']">
                  Mentorship & Careers
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Cloud certification study pods, resume audits, and mock interview prep.
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center text-xs font-semibold text-purple-400 group-hover:translate-x-1 transition-transform">
                <span>About Chapter</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Event Spotlight */}
      {latestEvent && (
        <section className="py-8 border-y border-white/10 bg-[#0C1222]/40 relative">
          <Container>
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#0E1629] border border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="purple" size="sm" dot={false}>
                    Next Event
                  </Badge>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    {latestEvent.displayDate}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#F8FAFC] font-['Space_Grotesk']">
                  {latestEvent.title}
                </h3>
              </div>

              <div className="shrink-0">
                <Button
                  href="#events"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('events');
                  }}
                  variant="outline"
                  size="sm"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  All Events
                </Button>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Minimal Call to Action */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-[#0C1222]/80 to-[#080C16] relative text-center">
        <Container className="relative z-10 max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight font-['Space_Grotesk'] mb-2">
            Ready to Build?
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            Join 200+ student developers at Central University of Jammu.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              href={hero.joinCta.href}
              isExternal
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Join Community
            </Button>

            <Button
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              variant="secondary"
              size="md"
            >
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
