'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedBackground() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getMainLogoSize = () => {
    if (windowWidth < 640) return 0.9;
    if (windowWidth < 1024) return 1.05;
    return 1.15;
  };

  const getLayerAnimation = (index: number) => {
    const baseScale = 1 + index * 0.25;
    const baseOpacity = 0.2 - index * 0.03;
    return {
      opacity: isLoaded ? baseOpacity : 0,
      scale: isLoaded ? baseScale : 1,
      filter: 'blur(2px)', // Optional: adds some softness to the transition
    };
  };

  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
        {/* Main logo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: getMainLogoSize() }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <Image src="/icons/main.svg" alt="Logo" fill priority />
        </motion.div>

        {/* Background layers */}
        {[1, 2, 3, 4].map((index) => (
          <motion.div
            key={`layer-${index}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 1 }}
            animate={getLayerAnimation(index)}
            transition={{
              duration: 1.6,
              delay: 0.3 + index * 0.15,
              ease: 'easeInOut',
            }}
          >
            <Image
              src="/icons/layer.svg"
              alt={`Background layer ${index}`}
              fill
              style={{ objectFit: 'contain', opacity: 0.6 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
