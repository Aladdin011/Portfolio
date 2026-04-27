/**
 * Primary Button Component
 * Reusable button with consistent styling
 */

import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

type ButtonProps = Omit<HTMLMotionProps<'button'>, 'ref'> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'font-medium transition-all rounded-xl flex items-center justify-center gap-2';

    const variantStyles = {
      primary:
        'bg-linear-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 disabled:opacity-50',
      secondary:
        'bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50',
      ghost: 'text-white hover:bg-white/5 disabled:opacity-50',
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={!isLoading && !props.disabled ? { scale: 1.05 } : {}}
        whileTap={!isLoading && !props.disabled ? { scale: 0.95 } : {}}
        className={`
          ${baseStyles}
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
        )}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
