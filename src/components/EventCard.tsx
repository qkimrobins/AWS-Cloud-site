import React from 'react';
import { MapPin, User, ArrowUpRight } from 'lucide-react';
import type { ClubEvent } from '../content/events';
import { Badge } from './UI/Badge';

interface EventCardProps {
  event: ClubEvent;
  index?: number;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  // Parse date parts from ISO date string
  const day = event.date.split('-')[2];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const month = months[parseInt(event.date.split('-')[1], 10) - 1] || 'TBD';
  const year = event.date.split('-')[0];

  const getCategoryBadgeVariant = () => {
    switch (event.category) {
      case 'Orientation':
        return 'primary';
      case 'AMA':
        return 'cyan';
      case 'Workshop':
        return 'success';
      case 'Tech Talk':
        return 'purple';
      case 'Conference':
        return 'primary';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="group relative rounded-2xl bg-[#0E1B2C] border border-white/10 p-6 sm:p-7 hover:border-white/25 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,153,0,0.1)] flex flex-col md:flex-row md:items-start gap-6">
      {/* Date Block */}
      <div className="flex md:flex-col items-center justify-between md:justify-center shrink-0 w-full md:w-28 p-3.5 sm:p-4 rounded-xl bg-[#101D2E] border border-white/10 group-hover:border-[#FF9900]/40 group-hover:bg-[#14243A] transition-all">
        <div className="text-center">
          <span className="block text-2xl sm:text-3xl font-black text-[#F7FAFC] font-mono tracking-tight group-hover:text-[#FF9900] transition-colors">
            {day}
          </span>
          <span className="block text-xs font-mono font-bold text-[#FF9900] tracking-widest">
            {month}
          </span>
          <span className="block text-[11px] font-mono text-[#A9B7C9]/60">
            {year}
          </span>
        </div>

        <div className="md:mt-3 md:pt-3 md:border-t md:border-white/10">
          <Badge
            variant={event.status === 'completed' ? 'secondary' : 'success'}
            size="sm"
            className="text-[10px] lowercase font-mono"
          >
            {event.status === 'completed' ? 'concluded' : 'upcoming'}
          </Badge>
        </div>
      </div>

      {/* Event Details */}
      <div className="flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant={getCategoryBadgeVariant()} size="sm">
              {event.category}
            </Badge>

            {event.location && (
              <span className="inline-flex items-center gap-1 text-xs text-[#A9B7C9] font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#7DD3FC]" />
                {event.location}
              </span>
            )}
          </div>

          {/* Event Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#F7FAFC] group-hover:text-[#FF9900] transition-colors font-['Space_Grotesk'] leading-snug">
            {event.title}
          </h3>

          {/* Optional Speaker */}
          {event.speaker && (
            <div className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm text-[#FFAC33] font-medium">
              <User className="w-3.5 h-3.5" />
              <span>Speaker: {event.speaker}</span>
            </div>
          )}

          {/* Optional Description */}
          {event.description && (
            <p className="mt-3 text-xs sm:text-sm text-[#A9B7C9] leading-relaxed">
              {event.description}
            </p>
          )}
        </div>

        {/* Optional Registration Link or Details */}
        {event.link && (
          <div className="pt-3 border-t border-white/10">
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#FF9900] hover:text-[#FFAC33] transition-colors"
            >
              <span>Event Details</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
