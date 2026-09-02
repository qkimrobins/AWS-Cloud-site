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
        return <Cloud className="w-4 h-4 text-blue-400" />;
      case 'GitBranch':
        return <GitBranch className="w-4 h-4 text-indigo-400" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-sky-400" />;
      case 'Calendar':
        return <Calendar className="w-4 h-4 text-purple-400" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-violet-400" />;
      case 'Award':
        return <Award className="w-4 h-4 text-indigo-300" />;
      default:
        return <Cloud className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="group relative rounded-2xl bg-[#0E1629] border border-white/10 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-blue-500/40 hover:bg-[#121B30] shadow-sm">
      <div>
        {/* Top bar with Icon and Category/Index */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-[#10192D] border border-white/10 group-hover:scale-105 transition-transform duration-200">
            {getIcon()}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
              {feature.category}
            </span>
            <span className="text-xs font-mono text-slate-500">
              0{index + 1}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] group-hover:text-blue-400 transition-colors font-['Space_Grotesk'] mb-2">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 font-normal">
          {feature.description}
        </p>
      </div>

      {/* Tech Tags Bottom */}
      <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1">
        {feature.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10192D] text-slate-400 border border-white/5"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
