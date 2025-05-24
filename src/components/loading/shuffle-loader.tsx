'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PremiumLoaderProps } from '@/types/components.type';

export default function ShuffleLoader({
  onLoadingComplete,
}: PremiumLoaderProps) {
  const [squares, setSquares] = useState(
    Array.from({ length: 9 }, (_, i) => ({
      id: i + 1,
      x: i % 3,
      y: Math.floor(i / 3),
      visible: true,
    }))
  );
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setSquares((prev) => {
        const visibleCount = prev.filter((s) => s.visible).length;
        return prev.map((square) => {
          if (visibleCount <= 4 && square.visible) return square;
          return {
            ...square,
            visible: Math.random() > 0.3,
          };
        });
      });

      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(animationInterval);
          return 100;
        }
        return prev + 2.5;
      });
    }, 100); // Update every 100ms

    const timeout = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.(); // ✅ Callback when done
    }, 2000); // ⏱ 2s total loader time

    return () => {
      clearInterval(animationInterval);
      clearTimeout(timeout);
    };
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-main text-white">
      <div className="relative w-24 h-24">
        <div className="grid grid-cols-3 grid-rows-3 gap-1">
          {squares.map((square) => (
            <motion.div
              key={square.id}
              initial={{ opacity: 1 }}
              animate={{
                opacity: square.visible ? 1 : 0,
                scale: square.visible ? 1 : 0.8,
              }}
              transition={{ duration: 0.2 }}
              className="w-7 h-7 bg-white"
            />
          ))}
        </div>
      </div>
      <div className="w-64 mt-4">
        <div className="h-2 w-full rounded-full bg-gray-400">
          <motion.div
            className="h-full rounded-full bg-blue-500"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
}
