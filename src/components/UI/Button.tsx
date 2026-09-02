import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'purple' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  icon,
  iconPosition = 'right',
  children,
  className,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C16] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer group select-none';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-[0_4px_20px_rgba(59,130,246,0.35),inset_0_1px_1px_rgba(255,255,255,0.35)] border border-white/25 backdrop-blur-md',
    secondary:
      'bg-white/[0.08] backdrop-blur-xl text-slate-100 hover:bg-white/[0.14] hover:text-white border border-white/15 hover:border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)]',
    purple:
      'bg-purple-600/90 text-white font-semibold hover:bg-purple-500 shadow-[0_4px_20px_rgba(139,92,246,0.35),inset_0_1px_1px_rgba(255,255,255,0.35)] border border-white/20 backdrop-blur-md',
    outline:
      'bg-white/[0.04] backdrop-blur-xl text-slate-200 border border-white/15 hover:border-blue-400/50 hover:text-white hover:bg-blue-500/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]',
    ghost:
      'bg-transparent text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent backdrop-blur-sm',
  };

  const sizeStyles = {
    sm: 'text-xs sm:text-xs px-3.5 py-1.5 gap-1.5 rounded-lg',
    md: 'text-xs sm:text-sm px-4.5 py-2.5 gap-2 rounded-xl',
    lg: 'text-sm sm:text-base px-6 py-3.5 gap-2.5 font-medium rounded-xl',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5 shrink-0">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5 shrink-0">
          {icon}
        </span>
      )}
    </>
  );

  const combinedClasses = twMerge(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
