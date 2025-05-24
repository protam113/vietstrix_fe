'use client';

import type React from 'react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './animated-background';
import { PremiumLoaderProps } from '@/types/components.type';

export default function LoadingBanner({
  onLoadingComplete,
}: PremiumLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress every 100ms to reach 100% in 3 seconds
    const animationInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + 3.33, 100); // 3.33 * 30 = 100 over 3s
        if (newProgress >= 100) {
          clearInterval(animationInterval);
        }
        return newProgress;
      });
    }, 100);

    // Complete loading after 3 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.();
    }, 3000);

    return () => {
      clearInterval(animationInterval);
      clearTimeout(timeout);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-main"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: 'easeInOut',
            },
          }}
        >
          <div className="flex-1 w-full flex items-center justify-center">
            <AnimatedBackground />
          </div>
          <div className="absolute bottom-8 w-64 flex flex-col items-center">
            <div className="mb-2 text-white font-mono text-lg">
              [ {Math.round(progress)}% ]
            </div>
            <div className="h-4 w-full bg-white">
              <motion.div
                className="h-full bg-main-700"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
