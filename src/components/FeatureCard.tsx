import React from 'react';
import { Cloud, GitBranch, Layers, Calendar, Compass, Award } from 'lucide-react';
import type { FeatureItem } from '../content/features';

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const getIcon = () => {
    switch (feature.iconName) {
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-[#FF9900]" />;
      case 'GitBranch':
        return <GitBranch className="w-6 h-6 text-[#7DD3FC]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#34D399]" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-[#FF9900]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#7DD3FC]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#A78BFA]" />;
      default:
        return <Cloud className="w-6 h-6 text-[#FF9900]" />;
    }
  };

  const getAccentBorder = () => {
    switch (feature.iconName) {
      case 'Cloud':
      case 'Calendar':
        return 'group-hover:border-[#FF9900]/40 group-hover:shadow-[0_0_25px_rgba(255,153,0,0.15)]';
      case 'GitBranch':
      case 'Compass':
        return 'group-hover:border-[#7DD3FC]/40 group-hover:shadow-[0_0_25px_rgba(125,211,252,0.15)]';
      case 'Layers':
        return 'group-hover:border-[#34D399]/40 group-hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]';
      case 'Award':
        return 'group-hover:border-[#A78BFA]/40 group-hover:shadow-[0_0_25px_rgba(167,139,250,0.15)]';
      default:
        return 'group-hover:border-[#FF9900]/40';
    }
  };

  return (
    <div
      className={`group relative rounded-2xl bg-[#0E1B2C] border border-white/10 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${getAccentBorder()}`}
    >
      <div>
        {/* Top bar with Icon and Category/Index */}
        <div className="flex items-center justify-between mb-6">
          <div className="p-3.5 rounded-xl bg-[#101D2E] border border-white/10 group-hover:scale-110 transition-transform duration-300">
            {getIcon()}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A9B7C9]/70 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
              {feature.category}
            </span>
            <span className="text-xs font-mono text-[#A9B7C9]/40">
              0{index + 1}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#F7FAFC] group-hover:text-[#FF9900] transition-colors font-['Space_Grotesk'] mb-3">
          {feature.title}
        </h3>

        {/* Description from PRD */}
        <p className="text-sm sm:text-base text-[#A9B7C9] leading-relaxed mb-6 font-normal">
          {feature.description}
        </p>
      </div>

      {/* Tech Tags Bottom */}
      <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
        {feature.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#101D2E] text-[#A9B7C9] border border-white/5"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
