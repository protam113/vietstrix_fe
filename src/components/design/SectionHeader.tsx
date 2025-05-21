import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeaderProps } from '@/types/components.type';

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <h2 className="text-4xl font-bold text-main  uppercase mt-4 mb-4 flex items-center gap-2">
      <ArrowUpRight size={40} strokeWidth={1.5} /> {title}
    </h2>
  );
};

export default SectionHeader;
