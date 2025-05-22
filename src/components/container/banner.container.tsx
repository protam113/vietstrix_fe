'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

const BannerContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // For scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transform values based on scroll position
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.7, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);

  // Overlay and blur effects that appear after midpoint
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    [0, 0, 0.3, 0.5]
  );
  const blurStrength = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    [0, 0, 4, 8]
  );

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen relative overflow-hidden"
    >
      {/* Main image with scroll-based animations */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          scale,
          opacity,
          y,
        }}
      >
        <div className="w-full h-[400px] bg-main" />
      </motion.div>

      {/* Overlay that appears when scrolling past midpoint */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none z-10"
        style={{
          opacity: overlayOpacity,
          backdropFilter: `blur(${blurStrength.get()}px)`,
        }}
      />
    </div>
  );
};

export default BannerContainer;
