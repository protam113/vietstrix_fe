'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import SectionHeader from '@/components/design/SectionHeader';
import LetterGlitch from '@/components/animation/LetterGlitch';
import Container from '@/components/container/container';

const WhySection = () => {
  return (
    <Container className="mx-auto">
      {/* Main Content */}
      <div className="flex justify-between">
        <SectionHeader title="Why us?" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            YOUR BRAND ≠ A TEMPLATE.
            <br />
            LET’S BUILD SOMETHING REAL.
          </motion.h1>

          <motion.p
            className="text-gray-400 text-sm max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We’re <span className="font-bold">Vietstrix</span> — a Gen Z web
            crew designing slick, custom sites and vibes-first UX/UI that
            actually *feels* like you. No AI clones, no Canva-core BS.
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* Image Section */}
        <div className="relative mt-8 mb-12">
          <LetterGlitch
            glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>
      </motion.div>
    </Container>
  );
};

export default WhySection;
