import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'cyan' | 'success' | 'outline' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  pulse = false,
  className,
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-[#FF9900]/10 text-[#FF9900] border-[#FF9900]/30 shadow-[0_0_12px_rgba(255,153,0,0.15)]',
    secondary: 'bg-white/5 text-[#A9B7C9] border-white/10',
    cyan: 'bg-[#7DD3FC]/10 text-[#7DD3FC] border-[#7DD3FC]/30 shadow-[0_0_12px_rgba(125,211,252,0.15)]',
    success: 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30',
    purple: 'bg-[#A78BFA]/10 text-[#A78BFA] border-[#A78BFA]/30',
    outline: 'bg-transparent text-[#A9B7C9] border-white/20',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 font-medium tracking-wide',
    md: 'text-xs sm:text-sm px-3.5 py-1 font-medium tracking-wider',
    lg: 'text-sm px-4 py-1.5 font-semibold tracking-wider',
  };

  const dotColors = {
    primary: 'bg-[#FF9900]',
    secondary: 'bg-[#A9B7C9]',
    cyan: 'bg-[#7DD3FC]',
    success: 'bg-[#34D399]',
    purple: 'bg-[#A78BFA]',
    outline: 'bg-white',
  };

  return (
    <span
      className={twMerge(
        'inline-flex items-center gap-2 rounded-full border backdrop-blur-sm transition-all duration-300 select-none uppercase font-mono',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          {pulse && (
            <span
              className={twMerge(
                'absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping',
                dotColors[variant]
              )}
            />
          )}
          <span
            className={twMerge(
              'relative inline-flex h-2 w-2 rounded-full',
              dotColors[variant]
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
};
