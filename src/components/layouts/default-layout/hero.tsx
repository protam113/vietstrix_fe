'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Bell,
  Heart,
  Home,
  Menu,
  Phone,
  Search,
  Settings,
  Star,
  User,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import AnimatedBackground from '@/components/animation/AnimatedBackground';
import { Techs } from '@/assets/icons/tech';

function PitchDeckAnimation() {
  const slides = [
    {
      id: 1,
      content: (
        <div className="w-full h-full bg-gray-800 rounded-lg p-3 flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="w-20 h-3 bg-gray-600 rounded-full"></div>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex-1 bg-gray-700 rounded-md flex items-center justify-center">
            <Star className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="mt-2 flex justify-between">
            <div className="w-16 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-10 h-3 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="w-full h-full bg-blue-800 rounded-lg p-3 flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="w-20 h-3 bg-blue-600 rounded-full"></div>
            <Menu className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 bg-blue-700 rounded-md p-2">
            <div className="w-full h-4 bg-blue-600 rounded-full mb-2"></div>
            <div className="w-3/4 h-4 bg-blue-600 rounded-full mb-2"></div>
            <div className="w-1/2 h-4 bg-blue-600 rounded-full"></div>
          </div>
          <div className="mt-2 flex justify-around">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="w-full h-full bg-purple-800 rounded-lg p-3 flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="w-20 h-3 bg-purple-600 rounded-full"></div>
            <Settings className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 bg-purple-700 rounded-md flex flex-col p-2 gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              <div className="flex-1">
                <div className="w-full h-3 bg-purple-600 rounded-full"></div>
                <div className="w-1/2 h-2 bg-purple-600 rounded-full mt-1"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              <div className="flex-1">
                <div className="w-full h-3 bg-purple-600 rounded-full"></div>
                <div className="w-1/2 h-2 bg-purple-600 rounded-full mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="w-full h-full bg-green-800 rounded-lg p-3 flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="w-20 h-3 bg-green-600 rounded-full"></div>
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 bg-green-700 rounded-md flex items-center justify-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <div className="mt-2 flex justify-center">
            <div className="w-24 h-6 bg-green-600 rounded-full"></div>
          </div>
        </div>
      ),
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col gap-4  ">
      <div className="relative h-64  overflow-hidden ">
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeSlide}
              initial={{ x: -300, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 80,
                  damping: 20,
                  duration: 0.8,
                },
              }}
              exit={{
                x: 300,
                opacity: 0,
                transition: {
                  type: 'spring',
                  stiffness: 80,
                  damping: 20,
                  duration: 0.5,
                },
              }}
              className="absolute flex items-center justify-center w-40 h-40"
              style={{
                filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.3))',
                perspective: '1000px',
              }}
            >
              {slides[activeSlide].content}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === activeSlide ? 'bg-white' : 'bg-white/30'
              }`}
              animate={{ scale: index === activeSlide ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface TechItem {
  id: number;
  image: string;
}

const techData: TechItem[] = [
  { id: 1, image: Techs.nextjs2 },
  { id: 2, image: Techs.go },
  { id: 3, image: Techs.typescript },
  { id: 4, image: Techs.docker },
  { id: 5, image: Techs.figma },
  { id: 6, image: Techs.python },
  { id: 7, image: Techs.redis },
  { id: 8, image: Techs.mongodb },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const greenDotRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  const contactNow = () => {
    router.push('/contact-us');
  };
  useEffect(() => {
    // Fade-in animation on page load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Animation for the green dot
    const animateDot = () => {
      if (greenDotRef.current) {
        greenDotRef.current.classList.add('animate-bounce');
        setTimeout(() => {
          if (greenDotRef.current) {
            greenDotRef.current.classList.remove('animate-bounce');
          }
        }, 1000);
      }
    };

    // Initial animation
    setTimeout(animateDot, 1500);

    // Set interval for repeating animation
    const interval = setInterval(animateDot, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-main relative overflow-hidden flex flex-col justify-center items-center px-4 sm:px-6"
      style={{
        backgroundImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), transparent 10%)`,
      }}
    >
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col h-screen justify-between relative z-10">
        <div className="flex flex-col md:flex-row my-auto items-start justify-between">
          <div className="my-auto">
            {/* Kickoff text with animation */}
            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center space-x-2 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-sm md:text-base overflow-hidden text-white whitespace-nowrap"
              >
                Contact us now for expert consultation tailored to your needs!{' '}
              </motion.span>
            </motion.div> */}

            {/* Main headline */}
            <div className="relative text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none"
              >
                VIETSTRIX
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
                  TEA
                  <span className="relative">
                    M
                    {/* <span
                      ref={greenDotRef}
                      className="absolute -right-4 top-0 w-10 h-10 rounded-full bg-green-400 transition-all duration-300 hover:scale-110"
                    >
                      {' '}
                      <Image
                        src="/icons/logo-cricle.svg"
                        fill
                        alt="Laurel icon"
                        className="h-8 w-8 md:h-10 md:w-10"
                      />
                    </span> */}
                  </span>
                </h1>
              </motion.div>
            </div>
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="self-end flex justify-between w-full"
            >
              <button
                onClick={contactNow}
                className={cn(
                  'flex items-center space-x-2 mt-8 group transform transition-all duration-1000 ease-out delay-400',
                  isLoaded
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                )}
              >
                <span className="text-sm text-white font-medium tracking-wider uppercase">
                  Contact Now
                </span>
                <Phone
                  size={16}
                  className="transition-transform text-white group-hover:scale-110"
                />
              </button>

              <button
                onClick={scrollToContent}
                className={cn(
                  'flex items-center space-x-2 mt-8 group transform transition-all duration-1000 ease-out delay-400',
                  isLoaded
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                )}
              >
                <span className="text-sm text-white font-medium tracking-wider uppercase">
                  Scroll to explore
                </span>
                <ArrowRight
                  size={16}
                  className="transition-transform text-white group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </div>

          {/* Project thumbnail */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 md:mt-0"
          >
            <div className="relative w-64  overflow-hidden group">
              <PitchDeckAnimation />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-4 text-xs max-w-xs"
            >
              <p className="text-gray-300  uppercase leading-tight">
                Vietstrix® is a Gen Z-driven web design consultancy,
                specializing in personalized websites tailored to each
                client&apos;s unique needs. We craft sleek, high-performance,
                and scalable web solutions that blend creativity with
                functionality—ensuring your online presence stands out and grows
                with you.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 w-full">
          <motion.div
            animate={{ x: [0, -1035] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
            className="flex gap-6 sm:gap-8 justify-center"
          >
            {[...techData, ...techData].map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white/10 rounded-lg p-4 sm:p-6 min-w-[100px] sm:min-w-[150px]"
              >
                <Image
                  src={tech.image || '/placeholder.svg'}
                  alt="logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated Background (Luôn nằm phía sau) */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>
    </div>
  );
}
