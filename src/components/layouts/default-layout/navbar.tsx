import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { NavigationItems } from './navItem';
import Link from 'next/link';
import GetStartedButton from '@/components/animata/container/AnimatedTrailProps';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronLeft, Mail, Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Container from '@/components/container/container';
import { DesButton } from '@/components/block/desButton';

export const TopHeader = () => {
  return (
    <div className="w-full  bg-main">
      <Container className="flex items-center justify-between text-white lg:text-14 text-sm">
        <div className="items-center gap-2 cursor-pointer hidden lg:flex">
          <p>Start building your software today. Book a call</p>
        </div>
        <div className="flex items-center gap-1">
          <Mail className="h-5 w-5" /> vietstrix@gmail.com
          <Phone className="ml-5" />
          +84 377 783 437
        </div>
      </Container>
    </div>
  );
};

export function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveMenu(null);
    setActiveSubmenu(null);
  };

  const navItems = [
    { name: 'Trang Chủ', href: '/' },
    { name: 'Về Chúng tôi', href: '/company' },
    { name: 'Dịch Vụ & Công Nghiệp', href: '/services' },
    { name: 'Bài Viết', href: '/blogs' },
    { name: 'Sản Phẩm', href: '/products' },
  ];

  const handleMenuClick = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
      setActiveSubmenu(null);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems1 = [
    // {
    //   name: 'Home',
    //   href: '/',
    //   dropdown: null,
    // },
    {
      name: 'Our Project',
      href: '/',
      dropdown: null,
    },
    {
      name: 'About',
      href: '/about',
      dropdown: (
        <div className="bg-white border-black/60 shadow-xl">
          <div className=" sm:w-full lg:max-w-9xl mx-auto container py-4">
            <h2 className="text-4xl font-bold text-main  uppercase mt-4 mb-4 flex items-center gap-2">
              About
            </h2>
            <div className="py-8 grid grid-cols-5 ">
              {/* Cột 1: Giới thiệu và Clutch */}
              <div className="flex flex-col justify-between gap-6">
                <p className="text-gray-600 text-base">
                  In our team, We’re not just Gen Zs — we’re passionate
                  developers fueled by technology, driven by purpose, and
                  committed to building meaningful digital experiences.
                </p>
              </div>
              {/* Separator */}
              <div className="w-px bg-gray-300 h-full mx-auto"></div>
              {/* Cột 2: Navigation links */}
              <div>
                <DesButton normal="Our" main="Team" url="/our-team" />
              </div>
              {/* Separator */}
              <div className="w-px bg-gray-300 h-full mx-auto"></div>
              {/* Cột 3: Testimonial */}
              <div>
                <DesButton normal="How" main="Do We Work ?" url="/our-team" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: (
        <div className="bg-white border-black/60 shadow-xl">
          <div className=" sm:w-full lg:max-w-9xl mx-auto container py-4">
            <h2 className="text-4xl font-bold text-main  uppercase mt-4 mb-4 flex items-center gap-2">
              Services
            </h2>
            <div className="py-8 grid grid-cols-5 gap-6">
              {/* Cột 3-4: What We Do Best */}

              <div className="col-span-2 pl-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-5 bg-blue-300"></div>
                  <span className="text-sm font-bold text-main">
                    WHAT WE DO BEST
                  </span>
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      Web App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      CMS & Admin Dashboards
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      Landing Pages
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      E-commerce Sites
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      Performance Optimization
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Separator */}
              <div className="w-px bg-gray-300 h-full mx-auto"></div>

              {/* Cột 1: AI & Design */}
              <div className="space-y-8 col-span-1">
                {/* AI & Optimization */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-5 bg-yellow-300"></div>
                    <span className="text-sm font-bold text-main">
                      AI & OPTIMIZATION
                    </span>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        GenAI Chatbot
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Prompt Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Performance Boost
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        SEO & Meta
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Accessibility
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Design Services */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-5 bg-pink-300"></div>
                    <span className="text-sm font-bold text-main">
                      DESIGN SERVICES
                    </span>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        UX/UI Design
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        System Design
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Landing Page
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:underline">
                        Graphic Design
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Cột 2: Systems & Cloud */}
              <div className="col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-5 bg-main"></div>
                  <span className="text-sm font-bold text-main">
                    SYSTEMS & CLOUD
                  </span>
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      Docker Deployments
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      Redis Cache
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      Object Storage
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      Microservices
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      CI/CD Pipelines
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      Cloud Hosting
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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

  const handleSubmenuClick = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const handleBackClick = () => {
    if (activeSubmenu) {
      setActiveSubmenu(null);
    } else {
      setActiveMenu(null);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
    ${isScrolling ? 'bg-white shadow-xl' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center ml-4">
            <div className="relative w-[30px] h-[30px] flex-shrink-0">
              <Image
                src="/icons/logo.svg"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            {/* Mobile view (small screen) */}
            <span
              className={`text-2xl font-bold ml-[2px] ${
                isScrolling ? 'text-main' : 'text-white'
              }`}
            >
              IETSTRIX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <ul className="flex space-x-8">
                {navItems1.map((item) => (
                  <li key={item.name} className="relative">
                    <button
                      className={cn(
                        'flex items-center py-2 text-base font-medium hover:text-main-800 hover:underline',
                        isScrolling ? 'text-main' : 'text-white', // Đây mới là đúng
                        activeDropdown === item.name && 'underline'
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
                            'ml-1 h-4 w-4 transition-transform duration-400 ease-in-out',
                            activeDropdown === item.name ? 'rotate-180' : ''
                          )}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Icons & Button */}
          <div className="hidden lg:flex items-center gap-2 mr-4">
            <GetStartedButton
              text="Get in Touch"
              url="/contact-us"
              isScrolling={isScrolling}
            />
          </div>

          <div className="lg:hidden">
            <button
              className={`${isScrolling ? 'text-main' : 'text-white'}`}
              onClick={toggleMobileMenu}
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {navItems1.map(
        (item) =>
          item.dropdown && (
            <div
              key={`dropdown-${item.name}`}
              className={cn(
                'fixed top-16 left-0 w-screen bg-white transition-all duration-500 ease-out transform z-40 origin-top',
                activeDropdown === item.name
                  ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 scale-y-95 -translate-y-4 pointer-events-none'
              )}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="w-full px-4">{item.dropdown}</div>
            </div>
          )
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white bg-opacity-50 z-50 lg:hidden transition-opacity duration-300',
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={toggleMobileMenu}
      >
        <div
          className={cn(
            'fixed inset-y-0 right-0 max-w-full w-full bg-white text-white transition-transform duration-300 ease-in-out transform',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            {activeMenu ? (
              <button
                className="flex items-center text-black"
                onClick={handleBackClick}
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                {activeSubmenu ? activeMenu : 'Back'}
              </button>
            ) : (
              <Link href="/" className="flex items-center ml-4">
                <div className="relative w-[30px] h-[30px] flex-shrink-0">
                  <Image
                    src="/icons/logo.svg"
                    alt="Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-2xl font-bold ml-[2px] text-main">
                  IETSTRIX
                </span>
              </Link>
            )}
            <button
              className="p-2 text-black"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              {activeMenu ? (
                <span className="text-lg font-medium">
                  {activeSubmenu ? activeSubmenu : activeMenu}
                </span>
              ) : (
                <X className="h-6 w-6 " />
              )}
            </button>
          </div>

          <div className="overflow-y-auto bg-main h-full pb-20">
            {!activeMenu && (
              <nav className="p-4">
                <ul className="space-y-6">
                  <li>
                    <Link
                      href="/case-studies"
                      className="text-xl font-medium text-white"
                    >
                      Our Project
                    </Link>
                  </li>

                  <li>
                    <button
                      className="flex items-center justify-between w-full text-xl font-medium text-white"
                      onClick={() => handleMenuClick('About')}
                    >
                      <span>About</span>
                      <ChevronDown className="h-5 w-5" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="flex items-center justify-between w-full text-xl font-medium text-white"
                      onClick={() => handleMenuClick('Services')}
                    >
                      <span>Services</span>
                      <ChevronDown className="h-5 w-5" />
                    </button>
                  </li>

                  <li>
                    <Link
                      href="/how-we-deliver"
                      className="text-xl font-medium text-white"
                    >
                      How we deliver
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/how-we-deliver"
                      className="text-xl font-medium text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            )}

            {activeMenu === 'Services' && !activeSubmenu && (
              <div className="p-4">
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    SOFTWARE DELIVERY
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <button
                        className="flex items-center text-white w-full"
                        onClick={() => handleSubmenuClick('Development')}
                      >
                        <span className="mr-2">→</span> Development
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex items-center text-white w-full"
                        onClick={() => handleSubmenuClick('Modernization')}
                      >
                        <span className="mr-2">→</span> Modernization
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex items-center text-white w-full"
                        onClick={() => handleSubmenuClick('AI & Data')}
                      >
                        <span className="mr-2">→</span> AI & Data
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex items-center text-white w-full"
                        onClick={() => handleSubmenuClick('Cloud Engineering')}
                      >
                        <span className="mr-2">→</span> Cloud Engineering
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    SPECIALISTS ON DEMAND
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="#" className="text-white">
                        Staff Augmentation
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-white">
                        Dedicated Teams
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeMenu === 'About' && (
              <div className="p-4">
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="text-white">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white">
                      How Do We Work
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className="text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
