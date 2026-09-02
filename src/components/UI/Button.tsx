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
      'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-md shadow-blue-500/20 border border-blue-400/20',
    secondary:
      'bg-[#10192D] text-slate-200 hover:bg-[#15223C] hover:text-white border border-white/10 hover:border-slate-600 shadow-sm',
    purple:
      'bg-purple-600 text-white font-semibold hover:bg-purple-500 shadow-md shadow-purple-500/20 border border-purple-400/20',
    outline:
      'bg-transparent text-slate-200 border border-white/15 hover:border-blue-500/60 hover:text-white hover:bg-blue-500/10',
    ghost:
      'bg-transparent text-slate-400 hover:text-white hover:bg-white/5 border border-transparent',
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
