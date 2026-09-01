import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Badge } from './Badge';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: 'primary' | 'secondary' | 'cyan' | 'purple';
  title: string;
  highlightWord?: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowVariant = 'primary',
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
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] via-[#FFB84D] to-[#7DD3FC]">
          {highlightWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={twMerge(
        'max-w-3xl mb-12 sm:mb-16',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className="mb-4">
          <Badge variant={eyebrowVariant} size="sm" dot pulse>
            {eyebrow}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7FAFC] font-['Space_Grotesk'] leading-[1.15]">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#A9B7C9] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
