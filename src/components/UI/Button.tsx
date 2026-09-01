import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
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
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111F] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer group select-none';

  const variantStyles = {
    primary:
      'bg-[#FF9900] text-[#07111F] font-semibold hover:bg-[#FFAC33] shadow-[0_0_24px_rgba(255,153,0,0.3)] hover:shadow-[0_0_32px_rgba(255,153,0,0.5)] border border-[#FF9900]/40',
    secondary:
      'bg-[#101D2E] text-[#F7FAFC] hover:bg-[#14243A] border border-white/10 hover:border-white/20 shadow-md',
    outline:
      'bg-transparent text-[#F7FAFC] border border-white/15 hover:border-[#FF9900]/60 hover:text-[#FF9900] hover:bg-[#FF9900]/5',
    ghost:
      'bg-transparent text-[#A9B7C9] hover:text-[#F7FAFC] hover:bg-white/5 border border-transparent',
  };

  const sizeStyles = {
    sm: 'text-xs sm:text-sm px-3.5 py-2 gap-1.5',
    md: 'text-sm sm:text-base px-5 py-2.5 gap-2',
    lg: 'text-base sm:text-lg px-7 py-3.5 gap-2.5 font-semibold',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
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
