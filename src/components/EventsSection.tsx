import React, { useState } from 'react';
import { Container } from './UI/Container';
import { SectionHeading } from './UI/SectionHeading';
import { EventCard } from './EventCard';
import { events } from '../content/events';

interface EventsSectionProps {
  limit?: number;
  showFilters?: boolean;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ limit, showFilters = true }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Filter categories
  const categories = ['all', 'Orientation', 'AMA', 'Workshop', 'Tech Talk', 'Conference'];

  const filteredEvents = events.filter((event) => {
    if (activeFilter === 'all') return true;
    return event.category.toLowerCase() === activeFilter.toLowerCase();
  });

  const displayEvents = limit ? filteredEvents.slice(0, limit) : filteredEvents;

  return (
    <section id="events" className="py-20 md:py-28 relative bg-[#080C16] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Timeline & Sessions"
          eyebrowVariant="blue"
          title="Community Events"
          highlightWord="Events"
          subtitle="Explore our hands-on workshops, technical speaker sessions, interactive AMAs, and student hackathons."
          alignment="center"
        />

        {/* Category Filters */}
        {showFilters && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20'
                    : 'bg-[#10192D] text-slate-300 hover:text-white border border-white/10 hover:border-slate-600'
                }`}
              >
                {cat === 'all' ? 'All Sessions' : cat}
              </button>
            ))}
          </div>
        )}

        {/* Events List */}
        <div className="max-w-4xl mx-auto space-y-5">
          {displayEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
