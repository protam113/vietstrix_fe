import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { NavigationItems } from './navItem';
import Link from 'next/link';
import GetStartedButton from '@/components/animata/container/AnimatedTrailProps';

interface NavItemProps {
  children: React.ReactNode;
  href: string;
  external?: boolean;
}

function NavItem({ children, href, external = false }: NavItemProps) {
  if (external) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold transition-colors hover:text-blue-500"
        >
          {children}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link href={href}>
        <span className="font-bold transition-colors hover:text-blue-500 cursor-pointer">
          {children}
        </span>
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleOpen = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolling
          ? 'bg-gray-500 bg-opacity-50 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center ml-4">
            <div className="relative w-[24px] h-[26px] flex-shrink-0">
              <Image
                src="/icons/logo.svg"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="text-24 font-bold  ml-[2px]  text-white">
              IETSTRIX
            </span>
          </Link>
          {/* Desktop Navigation
          <div className="hidden lg:flex items-center ">
            
          </div> */}

          {/* Social Icons & Button */}
          <div className="hidden lg:flex items-center gap-2 mr-4">
            <NavigationItems isScrolling={isScrolling} />
            {/* <a
              href="/login"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-md text-white font-medium transition-colors border ${
                isScrolling
                  ? 'border-gray-500  hover:bg-gray-300'
                  : 'border-white  hover:bg-white/30'
              }`}
            >
              Login
            </a> */}
            {/* <LanguageDropdown isScrolling={isScrolling} /> */}
            <GetStartedButton text="Get in Touch" url="/contact-us" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleOpen}
            className={`lg:hidden p-2 rounded-md ${
              isScrolling ? 'text-gray-900' : 'text-white'
            }`}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden">
          <div className="container mx-auto px-4 py-5 bg-white rounded-lg mt-1 shadow-lg">
            <ul className="flex flex-col gap-4 text-gray-900">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">About Us</NavItem>
              <NavItem href="/contact">Contact Us</NavItem>
              <NavItem
                href="https://www.material-tailwind.com/docs/react/installation"
                external
              >
                Docs
              </NavItem>
              <NavItem href="https://www.material-tailwind.com/blocks" external>
                Blocks
              </NavItem>
            </ul>
            <div className="mt-4 flex gap-2">
              <button className="p-2 text-gray-700 rounded-full hover:bg-gray-100">
                <i className="fa-brands fa-twitter text-base" />
              </button>
              <button className="p-2 text-gray-700 rounded-full hover:bg-gray-100">
                <i className="fa-brands fa-facebook text-base" />
              </button>
              <button className="p-2 text-gray-700 rounded-full hover:bg-gray-100">
                <i className="fa-brands fa-instagram text-base" />
              </button>
              <a
                href="https://www.material-tailwind.com/blocks"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-4 py-2 bg-gray-200 text-gray-900 rounded-md font-medium hover:bg-gray-300"
              >
                Blocks
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
