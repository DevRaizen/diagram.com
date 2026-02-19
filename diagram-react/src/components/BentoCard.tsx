import { type ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2;
}

export function BentoCard({
  children,
  className = '',
  colSpan = 1,
}: BentoCardProps) {
  return (
    <article
      className={`rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 overflow-hidden relative
        hover:bg-white/[0.05] hover:border-white/[0.14] transition-all duration-300 min-h-[400px] flex flex-col
        ${colSpan === 2 ? 'lg:col-span-2' : 'lg:col-span-1'} ${className}`}
    >
      {children}
    </article>
  );
}
