import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  align = 'left',
  className = '' 
}: SectionHeaderProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`mb-12 ${alignments[align]} ${className}`}>
      <h2 className="text-[38px] leading-[46px] font-black text-[#041221] mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-[18px] leading-[30px] font-normal text-gray-600 max-w-3xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
