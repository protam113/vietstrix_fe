'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function TestNavbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

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

  return (
    <header className="">
      <nav
        className={cn(
          'fixed top-0 h-[80px] left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out',
          scrolled
            ? 'bg-gray-500 bg-opacity-50 backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center ml-4">
            <div className="relative w-[24px] h-[26px] flex-shrink-0">
              <Image
                src="/icons/logo.svg"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-2xl font-bold  ml-[2px]  text-white">
              IETSTRIX
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-10">
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
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button>Contact Us</Button>
          </div>
        </div>

        {/* Dropdown Menus */}
        {navItems.map(
          (item) =>
            item.dropdown && (
              <div
                key={`dropdown-${item.name}`}
                className={cn(
                  'absolute left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform origin-top',
                  activeDropdown === item.name
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-5 pointer-events-none'
                )}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="container mx-auto">{item.dropdown}</div>
              </div>
            )
        )}

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-bold">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2"
              aria-label="Close mobile menu"
            >
              ✕
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-lg font-medium block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t">
                <Button className="w-full">Contact Us</Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div
        className={cn(
          'w-full transition-all duration-300',
          scrolled ? 'h-16' : 'h-20'
        )}
      />
    </header>
  );
}
