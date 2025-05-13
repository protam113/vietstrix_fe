'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Hero {
  title: string;
  heading?: string;
  subheading?: string;
}

export default function EnhancedHeroBanner({
  title,
  heading,
  subheading,
}: Hero) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  useEffect(() => {
    // Fade-in animation on page load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();

      // Check if mouse is inside hero section
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        // Calculate position relative to hero section
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth dot movement with optimized spring effect
  useEffect(() => {
    const smoothingFactor = 0.05; // Điều chỉnh giá trị này: 0.08 là tốc độ trung bình, mượt

    const animateDot = () => {
      setDotPosition((prev) => {
        // Tính toán chuyển động mượt hơn với spring effect
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;

        return {
          x: prev.x + dx * smoothingFactor,
          y: prev.y + dy * smoothingFactor,
        };
      });

      animationRef.current = requestAnimationFrame(animateDot);
    };

    // Bắt đầu animation
    animationRef.current = requestAnimationFrame(animateDot);

    // Dọn dẹp
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  const scrollToContent = () => {
    window.scrollTo({
      top: 800, // Scroll xuống đúng 800px
      behavior: 'smooth', // Mượt mà
    });
  };

  return (
    <div
      ref={heroRef}
      className="relative w-full h-[800px] bg-[#003049] overflow-hidden"
    >
      {/* Cursor follower dot */}
      <div
        className={cn(
          'absolute w-4 h-4 rounded-full bg-white transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          transform: `translate(${dotPosition.x}px, ${dotPosition.y}px)`,
          // Loại bỏ transition từ CSS để tránh xung đột với animation frame
        }}
      />

      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="space-y-16 mb-16">
          {/* Services label */}
          <div
            className={cn(
              'transform transition-all duration-700 ease-out',
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
          >
            <h2 className="text-4xl font-bold text-white uppercase mt-4 mb-4 flex items-center gap-2">
              <ArrowUpRight size={40} strokeWidth={1.5} /> {title}
            </h2>
          </div>

          {/* Main heading */}
          <div
            className={cn(
              'max-w-4xl transform transition-all duration-1000 ease-out delay-100',
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            <h1 className="text-5xl text-white md:text-6xl lg:text-7xl font-bold leading-tight">
              {heading}
            </h1>
          </div>

          {/* Description */}
          <div
            className={cn(
              'max-w-2xl transform transition-all duration-1000 ease-out delay-200',
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            <p className="text-lg text-gray-500">{subheading}</p>
          </div>
        </div>

        <div className="flex justify-between items-end">
          {/* Social icons */}
          <div
            className={cn(
              'flex space-x-4 transform transition-all duration-1000 ease-out delay-300',
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            <a
              href="https://www.facebook.com/vietstrix"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full text-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://x.com/Vietstrix"
              target="_blank"
              className="w-10 h-10 rounded-full text-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/hoangpham-strix/"
              target="_blank"
              className="w-10 h-10 rounded-full text-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/protam113"
              target="_blank"
              className="w-10 h-10 rounded-full text-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Scroll to explore */}
          <button
            onClick={scrollToContent}
            className={cn(
              'flex items-center space-x-2 group transform transition-all duration-1000 ease-out delay-400',
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
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
        </div>
      </div>
    </div>
  );
}
