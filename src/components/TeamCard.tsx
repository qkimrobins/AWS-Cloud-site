import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import type { TeamMember } from '../content/team';
import { Badge } from './UI/Badge';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const [imageFailed, setImageFailed] = useState(false);

  const getRoleBadgeVariant = (role: string) => {
    const lower = role.toLowerCase();
    if (lower.includes('captain')) return 'blue';
    if (lower.includes('technical')) return 'indigo';
    if (lower.includes('social') || lower.includes('media')) return 'purple';
    if (lower.includes('events')) return 'cyan';
    if (lower.includes('community')) return 'purple';
    return 'blue';
  };

  return (
    <div className="group relative rounded-3xl apple-glass apple-glass-interactive p-4 sm:p-5 flex flex-col items-center text-center shadow-md">
      {/* Portrait / Avatar Container */}
      <div className="relative mb-3.5">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden apple-glass-subtle group-hover:border-blue-400/50 transition-all duration-300 shadow-xl flex items-center justify-center">
          {!imageFailed ? (
            <img
              src={member.image}
              alt={`${member.name} - ${member.role}`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageFailed(true)}
              loading="lazy"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${member.accentColor || 'from-blue-600 to-indigo-800'} flex flex-col items-center justify-center p-3 relative`}>
              <div className="text-xl sm:text-2xl font-black font-mono tracking-wider text-white">
                {member.initials}
              </div>
              <div className="mt-0.5 text-[9px] font-mono text-white/80 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-2 h-2" /> CUJ
              </div>
            </div>
          )}
        </div>

        {/* Small Domain Pill */}
        {member.badge && (
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2">
            <span className="text-[9px] font-mono font-semibold px-2.5 py-0.5 rounded-full apple-glass-subtle text-slate-200 shadow-sm whitespace-nowrap">
              {member.badge}
            </span>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-sm sm:text-base font-bold text-[#F8FAFC] group-hover:text-blue-400 transition-colors font-['Space_Grotesk'] mt-0.5">
        {member.name}
      </h3>

      {/* Role */}
      <div className="mt-1.5 mb-1.5">
        <Badge
          variant={getRoleBadgeVariant(member.role)}
          size="sm"
          className="font-medium text-[11px] tracking-normal"
          dot={false}
        >
          {member.role}
        </Badge>
      </div>

      {/* Optional Short Bio */}
      {member.bio && (
        <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2 px-1">
          {member.bio}
        </p>
      )}
    </div>
  );
};
