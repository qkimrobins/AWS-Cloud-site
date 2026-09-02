import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Badge } from './Badge';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: 'blue' | 'purple' | 'indigo' | 'cyan' | 'slate' | 'outline' | 'primary' | 'secondary';
  title: string;
  highlightWord?: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowVariant = 'blue',
  title,
  highlightWord,
  subtitle,
  alignment = 'center',
  className,
}) => {
  const isCenter = alignment === 'center';

  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }

    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
          {highlightWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={twMerge(
        'max-w-3xl mb-10 sm:mb-14',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className="mb-3.5">
          <Badge variant={eyebrowVariant} size="sm" dot={false}>
            {eyebrow}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC] font-['Space_Grotesk'] leading-[1.15]">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#94A3B8] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
