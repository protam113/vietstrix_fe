'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
// import {
//   Code,
//   Database,
//   Cloud,
//   Server,
//   SmartphoneIcon as Mobile,
//   Shield,
//   BarChart,
//   Users,
//   Layout,
//   Monitor,
//   Building2,
// } from "lucide-react";
import TechContent from './tech-content';
import SectionHeader from '@/components/design/SectionHeader';

const categories = [
  { id: 'ui-ux', name: 'UI/UX' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  //   { id: "mobile", name: "Mobile" },
  { id: 'database', name: 'Database' },
  { id: 'cloud', name: 'Cloud' },
  { id: 'devops', name: 'DevOps' },
  { id: 'monitoring', name: 'Monitoring & Logging' },
  { id: 'collaboration', name: 'Collaboration Tools' },
];
export default function TechnologyExpertise() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
      {/* Categories on top */}
      <div className="w-full p-6 ">
        <SectionHeader title="Our Technology" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'flex items-center justify-center px-4 py-2 rounded-full border text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-[#013162] text-white border-[#739dc7] shadow-md'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-200'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full p-6">
        <TechContent category={activeCategory} />
      </div>
    </div>
  );
}
