import React from 'react';
import { Container } from './UI/Container';
import { SectionHeading } from './UI/SectionHeading';
import { TeamCard } from './TeamCard';
import { teamMembers } from '../content/team';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 md:py-32 relative bg-[#0B1728]/50 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF9900]/5 blur-[130px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Leadership"
          title="Our Team"
          highlightWord="Team"
          subtitle="Meet the student leaders driving cloud innovation, workshops, technical mentorship, and community engagement at Central University of Jammu."
          alignment="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
};
