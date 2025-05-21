'use client';

import type React from 'react';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SectionHeader from '@/components/design/SectionHeader';

export default function PortfolioShowcase() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClick = () => {
    router.push('/our-projects');
  };

  const handleContact = () => {
    router.push('/contact-us');
  };
  // Animation variants for the title section

  // Handle mouse movement over the image
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Scroll to section smoothly
  useEffect(() => {
    const scrollToSection = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Scroll after a short delay to ensure component is mounted
    const timer = setTimeout(scrollToSection, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" text-black  py-16 px-4 md:px-8">
      {/* Header section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="space-y-4 mb-6 md:mb-0">
            <div className="flex items-center">
              <SectionHeader
                title="See tangible
outcomes
"
              />
            </div>
            <p className="text-zinc-400">
              Showcase of some of my recent sleek websites
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={handleClick}
              className="rounded-full bg-[#003049] border-zinc-800 text-white hover:bg-[#003049]/60 hover:text-white"
            >
              See All Projects
            </Button>
            <Button
              className="rounded-full bg-white text-black hover:bg-zinc-200"
              onClick={handleContact}
            >
              Contact Now
            </Button>
          </div>
        </div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Featured project with hover effect */}
          <div
            className="relative rounded-xl overflow-hidden aspect-[4/3] bg-zinc-900 group"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              ref={imageRef}
              className="relative w-full h-full cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Image
                src="/bg/layout.png"
                alt="Project showcase"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />

              {/* Mouse following text */}
              {isHovering && (
                <motion.div
                  className="absolute flex items-center gap-2 text-white font-medium bg-black/70 px-3 py-1.5 rounded-full pointer-events-none"
                  animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    opacity: 1,
                    scale: 1,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.1 }}
                  style={{
                    transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`,
                  }}
                >
                  view web
                  <ArrowUpRight className="h-4 w-4" />
                </motion.div>
              )}

              {/* Share button */}
              <motion.div
                className="absolute top-4 right-4 z-10"
                animate={
                  hoveredCard === 0
                    ? {
                        scale: 1.15,
                        transition: { duration: 0.3 },
                      }
                    : {
                        scale: 1,
                        transition: { duration: 0.3 },
                      }
                }
              >
                <motion.button
                  className={`p-2.5 rounded-full transition-all duration-300 ${
                    hoveredCard === 0
                      ? 'bg-white/30 text-white backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                      : 'bg-black/30 text-white/80 backdrop-blur-sm'
                  }`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </motion.button>
              </motion.div>

              {/* Bottom arrow */}
            </div>
          </div>

          {/* Other project placeholders */}
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="relative rounded-xl overflow-hidden aspect-[4/3] bg-zinc-900 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * item, ease: 'easeOut' }}
              onMouseEnter={() => setHoveredCard(item)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt={`Project ${item}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />

              {/* Share button */}
              <motion.div
                className="absolute top-4 right-4 z-10"
                animate={
                  hoveredCard === item
                    ? {
                        scale: 1.15,
                        transition: { duration: 0.3 },
                      }
                    : {
                        scale: 1,
                        transition: { duration: 0.3 },
                      }
                }
              >
                <motion.button
                  className={`p-2.5 rounded-full transition-all duration-300 ${
                    hoveredCard === item
                      ? 'bg-white/30 text-white backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                      : 'bg-black/30 text-white/80 backdrop-blur-sm'
                  }`}
                >
                  <Share2 className="h-5 w-5" />
                </motion.button>
              </motion.div>

              <div className="absolute bottom-4 left-4 p-2 bg-black/20 backdrop-blur-sm rounded-full">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
