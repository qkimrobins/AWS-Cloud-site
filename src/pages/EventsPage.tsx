import React, { useState } from 'react';
import { ChevronRight, Search, Calendar, Sparkles, ExternalLink } from 'lucide-react';
import { Container } from '../components/UI/Container';
import { Badge } from '../components/UI/Badge';
import { Button } from '../components/UI/Button';
import { EventCard } from '../components/EventCard';
import { events } from '../content/events';
import { siteContent } from '../content/site';

interface EventsPageProps {
  onNavigate: (page: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'upcoming' | 'completed'>('all');

  const categories = ['all', 'Orientation', 'AMA', 'Workshop', 'Tech Talk', 'Conference'];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      searchQuery === '' ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (event.description && event.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (event.speaker && event.speaker.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (event.location && event.location.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      activeCategory === 'all' || event.category.toLowerCase() === activeCategory.toLowerCase();

    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
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
            <span className="text-blue-400">Events</span>
          </div>

          <div className="max-w-2xl">
            <Badge variant="blue" size="sm" dot={false} className="mb-3">
              Workshops & Sessions
            </Badge>
            <h1 className="text-2xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight font-['Space_Grotesk'] leading-tight">
              Community Events
            </h1>
            <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed">
              Explore hands-on labs, speaker keynotes, AMAs, and interactive builder sessions.
            </p>
          </div>
        </Container>
      </section>

      {/* Events Browser */}
      <section className="py-8 md:py-12">
        <Container>
          {/* Compact Filter Bar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0E1629] border border-white/10 mb-8 space-y-3.5 shadow-md">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search events, topics, or speakers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-[#10192D] border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Status Selector */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-[#10192D] border border-white/10 shrink-0 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setStatusFilter('all')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    statusFilter === 'all'
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter('upcoming')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    statusFilter === 'upcoming'
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Upcoming
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter('completed')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    statusFilter === 'completed'
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Past
                </button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'bg-[#10192D] text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Events List */}
          {filteredEvents.length > 0 ? (
            <div className="space-y-4 max-w-4xl mx-auto">
              {filteredEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 p-6 rounded-2xl bg-[#0E1629] border border-white/10 max-w-md mx-auto space-y-2">
              <Calendar className="w-8 h-8 text-slate-500 mx-auto" />
              <h3 className="text-sm font-bold text-[#F8FAFC]">No events match your filter</h3>
              <p className="text-xs text-slate-400">
                Try resetting filters to explore all community sessions.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setStatusFilter('all');
                }}
                className="mt-1 text-xs font-semibold text-blue-400 hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Propose a Talk Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#10192D] to-[#15223C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1 text-[11px] font-mono text-purple-400 uppercase tracking-wide">
                <Sparkles className="w-3 h-3" />
                <span>Call for Speakers</span>
              </div>
              <h3 className="text-base font-bold text-[#F8FAFC] font-['Space_Grotesk']">
                Want to Host a Workshop?
              </h3>
              <p className="text-xs text-slate-400">
                Share your cloud knowledge or project with CUJ students.
              </p>
            </div>

            <Button
              href={siteContent.hero.joinCta.href}
              isExternal
              variant="secondary"
              size="sm"
              icon={<ExternalLink className="w-3.5 h-3.5" />}
              className="shrink-0"
            >
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
