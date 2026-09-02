import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'indigo' | 'cyan' | 'slate' | 'outline' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  dot = false,
  className,
  ...props
}) => {
  const variantStyles: Record<string, string> = {
    blue: 'bg-blue-500/15 text-blue-300 border-blue-400/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]',
    purple: 'bg-purple-500/15 text-purple-300 border-purple-400/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]',
    indigo: 'bg-indigo-500/15 text-indigo-300 border-indigo-400/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]',
    cyan: 'bg-sky-500/15 text-sky-300 border-sky-400/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]',
    slate: 'bg-white/[0.06] text-slate-300 border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]',
    outline: 'bg-white/[0.03] text-slate-300 border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]',
    // Aliases for compatibility
    primary: 'bg-blue-500/15 text-blue-300 border-blue-400/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]',
    secondary: 'bg-white/[0.06] text-slate-300 border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 font-medium tracking-wide',
    md: 'text-xs sm:text-xs px-3.5 py-1 font-medium tracking-wider',
    lg: 'text-xs sm:text-sm px-4 py-1.5 font-semibold tracking-wider',
  };

  const dotColors: Record<string, string> = {
    blue: 'bg-blue-400',
    purple: 'bg-purple-400',
    indigo: 'bg-indigo-400',
    cyan: 'bg-sky-400',
    slate: 'bg-slate-400',
    outline: 'bg-slate-400',
    primary: 'bg-blue-400',
    secondary: 'bg-slate-400',
  };

  const selectedVariant = variantStyles[variant] ? variant : 'blue';

  return (
    <span
      className={twMerge(
        'inline-flex items-center gap-1.5 rounded-full border backdrop-blur-md transition-all duration-200 select-none uppercase font-mono',
        variantStyles[selectedVariant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={twMerge(
            'inline-block h-1.5 w-1.5 rounded-full shrink-0',
            dotColors[selectedVariant]
          )}
        />
      )}
      {children}
    </span>
  );
};
