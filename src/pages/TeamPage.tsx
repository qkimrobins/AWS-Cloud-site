import React, { useState } from 'react';
import { ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { Container } from '../components/UI/Container';
import { Badge } from '../components/UI/Badge';
import { Button } from '../components/UI/Button';
import { TeamCard } from '../components/TeamCard';
import { teamMembers } from '../content/team';
import { siteContent } from '../content/site';

interface TeamPageProps {
  onNavigate: (page: string) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { hero } = siteContent;

  const departments = [
    'all',
    'Executive Committee',
    'Cloud Engineering',
    'Design & Media',
    'Logistics & Outreach',
    'Member Engagement',
  ];

  const filteredMembers = teamMembers.filter((member) => {
    if (activeFilter === 'all') return true;
    return member.department?.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="pt-24 pb-16 animate-fade-in bg-cloud-radial min-h-screen">
      {/* Page Header */}
      <section className="py-8 md:py-12 border-b border-white/10 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-3">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400">Team</span>
          </div>

          <div className="max-w-2xl">
            <Badge variant="blue" size="sm" dot={false} className="mb-3">
              Leadership
            </Badge>
            <h1 className="text-2xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight font-['Space_Grotesk'] leading-tight">
              Core Committee
            </h1>
            <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed">
              Meet the student organizers and mentors driving cloud learning at Central University of Jammu.
            </p>
          </div>
        </Container>
      </section>

      {/* Team Directory Section */}
      <section className="py-8 md:py-12">
        <Container>

          {/* Members Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 items-stretch max-w-5xl mx-auto">
            {filteredMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          {/* Volunteer Callout Box */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#10192D] to-[#15223C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-400 uppercase tracking-wide">
                <Sparkles className="w-3 h-3" />
                <span>Get Involved</span>
              </div>
              <h3 className="text-base font-bold text-[#F8FAFC] font-['Space_Grotesk']">
                Want to Volunteer with Core Team?
              </h3>
              <p className="text-xs text-slate-400">
                Help coordinate workshops, design graphics, and manage technical logistics.
              </p>
            </div>

            <Button
              href={hero.joinCta.href}
              isExternal
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="shrink-0"
            >
              Apply to Volunteer
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
