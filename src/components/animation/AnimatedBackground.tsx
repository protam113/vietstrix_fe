'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedBackground() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial load state
    setIsLoaded(true);

    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Adjust animation values based on screen size
  const getAnimationValues = (index: any) => {
    // For mobile (smaller screens)
    if (windowWidth < 768) {
      return {
        opacity: isLoaded ? 0.7 - index * 0.15 : 0,
        x: isLoaded ? index * 10 : 0, // Smaller offset on mobile
        y: isLoaded ? index * 8 : 0, // Smaller offset on mobile
      };
    }
    // For tablets
    else if (windowWidth < 1024) {
      return {
        opacity: isLoaded ? 0.7 - index * 0.15 : 0,
        x: isLoaded ? index * 15 : 0, // Medium offset on tablets
        y: isLoaded ? index * 12 : 0, // Medium offset on tablets
      };
    }
    // For desktop (larger screens)
    else {
      return {
        opacity: isLoaded ? 0.7 - index * 0.15 : 0,
        x: isLoaded ? index * 20 : 0, // Original desktop offset
        y: isLoaded ? index * 15 : 0, // Original desktop offset
      };
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        {/* Static background image (always visible) */}
        <div className="w-full h-full z-[-1]">
          <Image
            src="/icons/main.svg"
            alt="Static Background"
            fill
            style={{
              objectFit: 'contain',
              objectPosition: windowWidth < 768 ? 'center top' : 'right top', // Center on mobile, right on desktop
            }}
            priority
          />
        </div>

        {/* Animated layers */}
        {[1, 2, 3, 4].map((index) => (
          <motion.div
            key={`layer-${index}`}
            className={`absolute top-0 w-full md:w-3/4 h-full ${
              windowWidth < 768 ? 'left-0' : 'right-0'
            }`}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={getAnimationValues(index)}
            transition={{
              duration: 1.2,
              delay: 0.8 + index * 0.2,
              ease: 'easeOut',
            }}
          >
            <Image
              src="/icons/layer.svg"
              alt={`Background layer ${index}`}
              fill
              style={{
                objectFit: 'contain',
                objectPosition: windowWidth < 768 ? 'center top' : 'right top', // Center on mobile, right on desktop
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
