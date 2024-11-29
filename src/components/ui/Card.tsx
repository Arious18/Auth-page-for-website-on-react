import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx(
      'bg-white rounded-xl shadow-xl border border-gray-100',
      'backdrop-blur-lg backdrop-filter',
      'transition-all duration-200',
      className
    )}>
      {children}
    </div>
  );
}