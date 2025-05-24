'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import GetStartedButton from '@/components/animata/container/AnimatedTrailProps';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/our-team' },
    { name: 'SHOW CASE', path: '/projects' },
    { name: 'SERVICES', path: '/services' },
    { name: 'BLOG', path: '/blogs' },
    { name: 'HOW DO WE WORK', path: '/work' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <div
        className={`fixed z-50 w-full flex justify-center items-center min-h-[80px] ${
          isScrolling ? 'bg-transparent' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl w-full mx-auto py-2 ">
          <nav className="flex items-center justify-between gap-4 md:gap-8 max-w-screen-xl mx-auto px-4">
            <div
              className={`flex items-center gap-6  h-[75px] px-4
    ${isScrolling ? 'bg-white/40 backdrop-blur-2xl shadow-lg' : 'bg-white'}
  `}
            >
              {/* Left section - Logo */}
              <Link href="/" className="flex items-center gap-2 pl-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/icons/logo.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="flex flex-col font-semibold text-main">
                  <span className="text-xl leading-none font-semibold uppercase">
                    VIETSTRIX®
                  </span>
                  <span className="text-xl leading-none font-semibold uppercase">
                    TEAM
                  </span>
                </div>
              </Link>
              <div className="hidden w-4 h-0.5 rotate-90 bg-gray-500"></div>

              {/* Center section - Navigation Links */}
              <div className="hidden md:flex px-4 py-2 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`
                    px-3 py-1 text-sm font-medium  transition-all duration-300 ease-in-out text-main
                   
                    ${
                      pathname === item.path
                        ? 'bg-main text-white font-semibold scale-105 shadow-sm'
                        : 'hover:bg-main/50 hover:scale-105'
                    }
                   
                  `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <button
                onClick={() => setIsOpen(true)}
                className={`hidden p-2 h-[75px] w-[100px] text-black hover:opacity-90 transition-opacity cursor-pointer z-50 md:flex items-center justify-center gap-2
    ${isScrolling ? 'bg-white/40 backdrop-blur-2xl shadow-lg' : 'bg-white'}
  `}
                aria-label="Open menu"
              >
                <span className="text-sm font-semibold text-main">MORE</span>
                <div className="flex flex-col justify-center gap-1">
                  <span className="block w-6 h-0.5 bg-main"></span>
                  <span className="block w-4 h-0.5 bg-main"></span>
                </div>
              </button>

              {/* Right section - Contact Button */}
              <div className="hidden md:flex items-center gap-2">
                <GetStartedButton text="Contact Us" url="/contact-us" />
              </div>
            </div>
            {/* Mobile menu button */}
            <button
              className={`md:hidden h-[75px] w-[100px] flex items-center justify-center gap-2
    ${isScrolling ? 'bg-white/40 backdrop-blur-2xl shadow-lg' : 'bg-white'}
  `}
              onClick={toggleMobileMenu}
            >
              <span className="text-sm font-semibold text-main">MENU</span>
              <div className="flex flex-col justify-center gap-1">
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-4 h-0.5 bg-black"></span>
              </div>
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 md:hidden">
          <div className="flex justify-between items-center mb-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8  rounded-full flex items-center justify-center">
                <Image
                  src="/icons/logo.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs leading-none font-semibold uppercase">
                  VietStrix®
                </span>
                <span className="text-xs leading-none font-semibold uppercase">
                  Team
                </span>
              </div>
            </div>

            {/* Close button */}
            <button
              className="flex items-center text-sm font-medium"
              onClick={toggleMobileMenu}
            >
              CLOSE <X className="ml-1" size={18} />
            </button>
          </div>

          {/* Mobile navigation links */}
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`
        py-2 px-4 text-sm font-medium w-full text-center
        ${pathname === item.path ? 'bg-main text-white' : 'hover:bg-gray-200'}
      `}
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile contact button */}
          <div className="mt-12 flex justify-center items-center gap-2">
            <GetStartedButton text="Get in Touch" url="/contact-us" />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
