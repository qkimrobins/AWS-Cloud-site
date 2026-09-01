import React from 'react';
import { Container } from './UI/Container';
import { SectionHeading } from './UI/SectionHeading';
import { FeatureCard } from './FeatureCard';
import { features } from '../content/features';

export const FeatureGrid: React.FC = () => {
  return (
    <section id="why-join" className="py-24 md:py-32 relative bg-[#0B1728]/50 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF9900]/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Member Benefits"
          title="Why Join Us"
          highlightWord="Join Us"
          subtitle="Everything you need to accelerate your technical journey from university student to industry-ready cloud builder."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
