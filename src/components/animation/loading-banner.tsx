'use client';

import type React from 'react';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './animated-background';
import { PremiumLoaderProps } from '@/types/components.type';

export default function LoadingBanner({
  onLoadingComplete, // Increased to 3.5 seconds to allow for the full animation
}: PremiumLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ⏱ Loader sẽ chạy trong 2 giây rồi gọi callback
    const timeout = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.(); // 👈 gọi callback sau khi loading kết thúc
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onLoadingComplete]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-main"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
              },
            }}
          >
            <div className="w-full h-screen flex items-center justify-center">
              <AnimatedBackground />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
