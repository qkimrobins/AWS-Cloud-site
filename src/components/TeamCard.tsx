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
    if (role.toLowerCase().includes('captain')) return 'primary';
    if (role.toLowerCase().includes('technical')) return 'cyan';
    if (role.toLowerCase().includes('social')) return 'purple';
    if (role.toLowerCase().includes('events')) return 'success';
    return 'primary';
  };

  return (
    <div className="group relative rounded-2xl bg-[#0E1B2C] border border-white/10 p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
      {/* Decorative gradient overlay on card hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Portrait / Avatar Container */}
      <div className="relative mb-5">
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-white/15 group-hover:border-[#FF9900]/60 transition-all duration-300 shadow-xl bg-gradient-to-br from-[#101D2E] to-[#14243A] flex items-center justify-center">
          {!imageFailed ? (
            <img
              src={member.image}
              alt={`${member.name} - ${member.role}`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageFailed(true)}
              loading="lazy"
            />
          ) : (
            /* Graceful Stylized Fallback Avatar */
            <div className={`w-full h-full bg-gradient-to-br ${member.accentColor || 'from-[#101D2E] to-[#162B44]'} flex flex-col items-center justify-center p-4 relative`}>
              <div className="text-2xl sm:text-3xl font-black font-mono tracking-wider text-[#F7FAFC] drop-shadow-md">
                {member.initials}
              </div>
              <div className="mt-1 text-[10px] font-mono text-white/80 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> CUJ
              </div>
            </div>
          )}
        </div>

        {/* Small Domain Pill */}
        {member.badge && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#101D2E] text-[#F7FAFC] border border-white/20 shadow-md">
              {member.badge}
            </span>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-lg sm:text-xl font-bold text-[#F7FAFC] group-hover:text-[#FF9900] transition-colors font-['Space_Grotesk'] mt-2">
        {member.name}
      </h3>

      {/* Role */}
      <div className="mt-2">
        <Badge
          variant={getRoleBadgeVariant(member.role)}
          size="sm"
          className="font-semibold text-xs tracking-normal"
        >
          {member.role}
        </Badge>
      </div>

      {/* Chapter Tag */}
      <div className="mt-4 pt-3 border-t border-white/5 w-full flex items-center justify-center text-[11px] font-mono text-[#A9B7C9]/70">
        <span>AWS Student Builder Group</span>
      </div>
    </div>
  );
};
