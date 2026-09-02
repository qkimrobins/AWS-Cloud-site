import React from 'react';
import { Container } from './UI/Container';
import { SectionHeading } from './UI/SectionHeading';
import { FeatureCard } from './FeatureCard';
import { features } from '../content/features';

interface FeatureGridProps {
  showAll?: boolean;
  limit?: number;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ limit }) => {
  const displayFeatures = limit ? features.slice(0, limit) : features;

  return (
    <section id="why-join" className="py-20 md:py-28 relative bg-[#0C1222]/50 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[300px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Member Benefits"
          eyebrowVariant="blue"
          title="Why Join Us"
          highlightWord="Join Us"
          subtitle="Everything you need to accelerate your technical journey from university student to industry-ready cloud builder."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {displayFeatures.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
