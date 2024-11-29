import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'relative inline-flex items-center justify-center font-medium transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 focus:ring-blue-300':
              variant === 'primary',
            'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300':
              variant === 'secondary',
            'border-2 border-gray-300 hover:border-gray-400 focus:ring-gray-200':
              variant === 'outline',
            'text-sm px-4 py-2 rounded-lg': size === 'sm',
            'px-6 py-2.5 rounded-lg': size === 'md',
            'px-8 py-3 rounded-xl': size === 'lg',
          },
          className
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
            <span className="opacity-0">{children}</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);