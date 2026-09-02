import React from 'react';
import { Container } from './UI/Container';
import { SectionHeading } from './UI/SectionHeading';
import { TeamCard } from './TeamCard';
import { teamMembers } from '../content/team';

interface TeamSectionProps {
  limit?: number;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ limit }) => {
  const displayMembers = limit ? teamMembers.slice(0, limit) : teamMembers;

  return (
    <section id="team" className="py-20 md:py-28 relative bg-[#0C1222]/50 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-blue-600/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[400px] h-[300px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Leadership"
          eyebrowVariant="blue"
          title="Our Team"
          highlightWord="Team"
          subtitle="Meet the student leaders driving cloud innovation, workshops, technical mentorship, and community engagement at Central University of Jammu."
          alignment="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch max-w-6xl mx-auto">
          {displayMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
};
