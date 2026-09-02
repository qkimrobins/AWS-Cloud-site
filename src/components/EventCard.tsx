import React from 'react';
import { MapPin, User, ArrowUpRight } from 'lucide-react';
import type { ClubEvent } from '../content/events';
import { Badge } from './UI/Badge';

interface EventCardProps {
  event: ClubEvent;
  index?: number;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const day = event.date.split('-')[2];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const month = months[parseInt(event.date.split('-')[1], 10) - 1] || 'TBD';
  const year = event.date.split('-')[0];

  const getCategoryBadgeVariant = () => {
    switch (event.category) {
      case 'Orientation':
        return 'blue';
      case 'AMA':
        return 'cyan';
      case 'Workshop':
        return 'purple';
      case 'Tech Talk':
        return 'indigo';
      case 'Conference':
        return 'blue';
      default:
        return 'slate';
    }
  };

  return (
    <div className="group relative rounded-2xl bg-[#0E1629] border border-white/10 p-4 sm:p-6 hover:border-blue-500/30 hover:bg-[#121B30] transition-all duration-300 shadow-md flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
      {/* Date Block */}
      <div className="flex sm:flex-col items-center justify-between sm:justify-center shrink-0 sm:w-24 p-2.5 sm:p-3 rounded-xl bg-[#10192D] border border-white/10 group-hover:border-blue-500/40 transition-all">
        <div className="text-center">
          <span className="block text-xl sm:text-2xl font-black text-[#F8FAFC] font-mono tracking-tight group-hover:text-blue-400 transition-colors">
            {day}
          </span>
          <span className="block text-[11px] font-mono font-bold text-blue-400 tracking-wider">
            {month} {year}
          </span>
        </div>

        <div className="sm:mt-2 sm:pt-2 sm:border-t sm:border-white/10">
          <Badge
            variant={event.status === 'completed' ? 'slate' : 'blue'}
            size="sm"
            className="text-[10px] lowercase font-mono"
            dot={false}
          >
            {event.status === 'completed' ? 'past' : 'upcoming'}
          </Badge>
        </div>
      </div>

      {/* Event Details */}
      <div className="flex-1 flex flex-col justify-between space-y-2">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <Badge variant={getCategoryBadgeVariant()} size="sm" dot={false}>
              {event.category}
            </Badge>

            {event.location && (
              <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                <MapPin className="w-3 h-3 text-sky-400" />
                {event.location}
              </span>
            )}
          </div>

          {/* Event Title */}
          <h3 className="text-sm sm:text-base font-bold text-[#F8FAFC] group-hover:text-blue-400 transition-colors font-['Space_Grotesk'] leading-snug">
            {event.title}
          </h3>

          {/* Optional Speaker */}
          {event.speaker && (
            <div className="mt-1 flex items-center gap-1.5 text-xs text-indigo-300 font-medium">
              <User className="w-3.5 h-3.5" />
              <span>Speaker: {event.speaker}</span>
            </div>
          )}

          {/* Optional Description */}
          {event.description && (
            <p className="mt-1.5 text-xs text-slate-400 leading-relaxed line-clamp-2 sm:line-clamp-none">
              {event.description}
            </p>
          )}
        </div>

        {/* Optional Registration Link */}
        {event.link && (
          <div className="pt-2 border-t border-white/10">
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Event Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
