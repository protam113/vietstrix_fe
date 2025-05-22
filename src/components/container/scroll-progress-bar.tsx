'use client';

import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  label: string;
  color?: string;
}

interface ScrollProgressBarProps {
  sections: Section[];
  className?: string;
}

export default function ScrollProgressBar({
  sections,
  className,
}: ScrollProgressBarProps) {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState<Record<string, number>>(
    {}
  );
  const lastScrollY = useRef(0);

  useEffect(() => {
    const sectionElements = sections
      .map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))
      .filter((item) => item.element !== null);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user has scrolled to the hidden section
      const hiddenSection = document.getElementById('hidden-section');
      if (hiddenSection) {
        const hiddenSectionRect = hiddenSection.getBoundingClientRect();
        // Hide the bar when the hidden section is in view
        if (
          hiddenSectionRect.top < window.innerHeight &&
          hiddenSectionRect.bottom > 0
        ) {
          setVisible(false);
          return; // Skip the rest of the calculations
        }
      }

      // Show/hide the progress bar based on scroll position and hidden section
      if (currentScrollY > 100) {
        const hiddenSection = document.getElementById('hidden-section');
        if (hiddenSection) {
          const hiddenSectionRect = hiddenSection.getBoundingClientRect();
          // Hide the bar when the hidden section is in view
          if (
            hiddenSectionRect.top < window.innerHeight &&
            hiddenSectionRect.bottom > 0
          ) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        } else {
          setVisible(true);
        }
      } else if (currentScrollY < 50) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;

      // Calculate progress for each section
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const newProgress: Record<string, number> = {};
      let currentActiveSection = null;
      let highestVisibility = 0;

      sectionElements.forEach(({ id, element }) => {
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const sectionHeight = rect.height;
        const sectionTop = scrollPosition + rect.top;
        const sectionBottom = sectionTop + sectionHeight;

        // Calculate how much of the section is visible
        const visiblePx =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visiblePercent = Math.max(
          0,
          Math.min(100, (visiblePx / sectionHeight) * 100)
        );

        // Calculate progress through the section (0-100%)
        // Smoother calculation based on scroll position relative to section
        const sectionScrollStart = Math.max(0, sectionTop - viewportHeight);
        const sectionScrollEnd = sectionBottom;
        const sectionScrollRange = sectionScrollEnd - sectionScrollStart;

        const progress = Math.max(
          0,
          Math.min(
            100,
            ((scrollPosition - sectionScrollStart) / sectionScrollRange) * 100
          )
        );

        newProgress[id] = progress;

        // Determine which section is most visible
        if (visiblePercent > highestVisibility) {
          highestVisibility = visiblePercent;
          currentActiveSection = id;
        }
      });

      setScrollProgress(newProgress);
      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-black/90',
        visible ? 'translate-y-0' : 'translate-y-full',
        className
      )}
    >
      <div className="flex w-full h-12 md:h-14">
        {sections.map((section, index) => {
          const progress = scrollProgress[section.id] || 0;
          const isActive = activeSection === section.id;

          return (
            <div
              key={section.id}
              className="relative flex-1 flex items-center justify-center text-xs md:text-sm text-white overflow-hidden"
              onClick={() => {
                const element = document.getElementById(section.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {/* Background progress indicator */}
              <div
                className="absolute inset-0 opacity-70 transition-all duration-700 ease-out"
                style={{
                  width: `${progress}%`,
                  backgroundColor: section.color || '#f97316',
                }}
              />

              {/* Text label */}
              <span className="relative z-10 px-2 whitespace-nowrap overflow-hidden text-ellipsis">
                {section.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
