import React, { useState } from 'react';
import { Container } from './UI/Container';
import { SectionHeading } from './UI/SectionHeading';
import { EventCard } from './EventCard';
import { events } from '../content/events';

export const EventsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Filter categories
  const categories = ['all', 'Orientation', 'AMA', 'Workshop', 'Tech Talk', 'Conference'];

  const filteredEvents = events.filter((event) => {
    if (activeFilter === 'all') return true;
    return event.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section id="events" className="py-24 md:py-32 relative bg-[#07111F] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#7DD3FC]/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Timeline & Sessions"
          title="Community Events"
          highlightWord="Events"
          subtitle="Explore our hands-on workshops, technical speaker sessions, interactive AMAs, and student hackathons."
          alignment="center"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#FF9900] text-[#07111F] font-bold shadow-[0_0_15px_rgba(255,153,0,0.3)]'
                  : 'bg-[#101D2E] text-[#A9B7C9] hover:text-[#F7FAFC] border border-white/10 hover:border-white/20'
              }`}
            >
              {cat === 'all' ? 'All Sessions' : cat}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
