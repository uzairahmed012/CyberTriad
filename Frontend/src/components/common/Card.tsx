import type { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'solid' | 'gradient' | 'glass';
  className?: string;
}

export default function Card({ 
  children, 
  variant = 'solid', 
  className = '', 
  ...props 
}: CardProps) {
  const baseStyles = 'rounded-2xl overflow-hidden transition-all duration-300';
  
  const variants = {
    solid: 'bg-white shadow-sm border border-gray-100',
    gradient: 'bg-gradient-mesh text-white border border-blue-800 shadow-xl',
    glass: 'bg-white/80 backdrop-blur-md border border-white/20 shadow-lg'
  };

  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
