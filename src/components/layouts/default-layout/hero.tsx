'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDown,
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
                  TEAM
                </h1>
                <p className="text-gray-300  uppercase leading-tight">
                  Vietstrix® is a Gen Z-led web design studio creating sleek,
                  scalable websites tailored to your brand—where creativity
                  meets performance.
                </p>
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
            </motion.div>
          </div>
        </div>

        <div className="absolute justify-center items-center bottom-10 w-full">
          <button
            onClick={scrollToContent}
            className={cn(
              'flex items-center space-x-2 mt-8 group transform transition-all duration-1000 ease-out delay-400',
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
          >
            <span className="text-sm text-white font-medium tracking-wider uppercase">
              Scroll to explore
            </span>
            <ArrowDown
              size={16}
              className="transition-transform text-white group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      {/* Animated Background (Luôn nằm phía sau) */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>
    </div>
  );
}
