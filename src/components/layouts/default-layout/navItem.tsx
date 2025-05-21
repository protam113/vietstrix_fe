'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export function NavigationItems({ isScrolling }: { isScrolling: boolean }) {
  const navItems = [
    {
      name: 'Home',
      href: '/',
      dropdown: null,
    },
    {
      name: 'About',
      href: '/about',
      dropdown: (
        <div className="grid grid-cols-3 gap-6 p-8">
          <div>
            <h3 className="text-lg font-medium mb-2">Our Story</h3>
            <p className="text-muted-foreground">
              Learn about our journey and mission.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Team</h3>
            <p className="text-muted-foreground">
              Meet the people behind our success.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Careers</h3>
            <p className="text-muted-foreground">
              Join our growing team of professionals.
            </p>
          </div>
        </div>
      ),
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: (
        <div className="grid grid-cols-4 gap-6 p-8">
          <div>
            <h3 className="text-lg font-medium mb-2">Web Development</h3>
            <p className="text-muted-foreground">
              Custom websites and web applications.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Mobile Apps</h3>
            <p className="text-muted-foreground">
              iOS and Android application development.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground">
              User-centered design solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Consulting</h3>
            <p className="text-muted-foreground">
              Expert advice for your digital projects.
            </p>
          </div>
        </div>
      ),
    },
    {
      name: 'Blog',
      href: '/blog',
      dropdown: null,
    },
  ];
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };
  return (
    <>
      <div className="relative">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <button
                className={cn(
                  'flex items-center py-2 text-base font-medium hover:text-primary',
                  activeDropdown === item.name
                    ? 'text-primary'
                    : 'text-foreground'
                )}
                onClick={() => toggleDropdown(item.name)}
                onMouseEnter={() =>
                  item.dropdown && setActiveDropdown(item.name)
                }
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown
                    className={cn(
                      'ml-1 h-4 w-4 transition-transform',
                      activeDropdown === item.name ? 'rotate-180' : ''
                    )}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {navItems.map(
          (item) =>
            item.dropdown && (
              <div
                key={`dropdown-${item.name}`}
                className={cn(
                  'absolute top-full left-0 w-screen bg-white shadow-lg transition-all duration-300 ease-in-out transform origin-top z-50',
                  activeDropdown === item.name
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5 pointer-events-none'
                )}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="max-w-7xl mx-auto px-4">{item.dropdown}</div>
              </div>
            )
        )}
      </div>
    </>
  );
}
{
  /* Mobile Navigation */
}
