'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import GetStartedButton from '@/components/animata/container/AnimatedTrailProps';

const NavBar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/our-team' },
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
        className={`fixed z-50 px-4 lg:px-8 w-full flex justify-center items-center min-h-[80px] ${
          isScrolling ? 'bg-white/10 backdrop-blur-2xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-8xl w-full mx-auto px-6 py-2 shadow-sm bg-white">
          <nav className="flex items-center justify-between gap-4 md:gap-8">
            {/* Left section - Logo */}
            <Link href="/" className="flex items-center gap-2">
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

            {/* Right section - Contact Button */}
            <div className="hidden md:flex items-center gap-2">
              <GetStartedButton text="Get in Touch" url="/contact-us" />
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1"
              onClick={toggleMobileMenu}
            >
              <span className="w-5 h-0.5 bg-black"></span>
              <span className="w-5 h-0.5 bg-black"></span>
              <span className="w-5 h-0.5 bg-black"></span>
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
