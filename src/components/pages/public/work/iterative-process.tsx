'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowLeft, ArrowRight, Target } from 'lucide-react';

export default function IterativeProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'Project Initiation',
      description:
        'Define project scope, objectives, and initial requirements.',
    },
    {
      id: 2,
      title: 'Planning',
      description:
        'Create detailed plans for the current iteration with prioritized features.',
    },
    {
      id: 3,
      title: 'Design',
      description:
        'Develop detailed designs for the features in the current iteration.',
    },
    {
      id: 4,
      title: 'Implementation',
      description: 'Build the features according to the design specifications.',
    },
    {
      id: 5,
      title: 'Testing',
      description:
        'Verify that the implementation meets requirements and quality standards.',
    },
    {
      id: 6,
      title: 'Evaluation',
      description:
        'Review the iteration with stakeholders and gather feedback.',
    },
    {
      id: 7,
      title: 'Deployment',
      description:
        'Release the current iteration to users and prepare for the next cycle.',
    },
  ];

  const benefits = [
    { id: 1, text: 'Flexibility' },
    { id: 2, text: 'Risk reduction' },
    { id: 3, text: 'Higher quality' },
  ];

  // Calculate positions for each step in a circle
  const getStepPosition = (index: number, totalSteps: number) => {
    const radius = 240; // Increased radius to account for numbers being outside
    const angle = ((Math.PI * 2) / totalSteps) * index - Math.PI / 2;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setActiveStep((prev) => {
          if (prev === null) return 1;
          return prev === steps.length ? 1 : prev + 1;
        });
      } else if (e.key === 'ArrowLeft') {
        setActiveStep((prev) => {
          if (prev === null) return steps.length;
          return prev === 1 ? steps.length : prev - 1;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [steps]);

  // Update progress when active step changes
  useEffect(() => {
    if (activeStep === null) {
      setProgress(0);
    } else {
      setProgress((activeStep / steps.length) * 100);
    }
  }, [activeStep, steps.length]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center">
      <div className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">
        TO IMPROVE THE QUALITY OF A PRODUCT AND OPTIMIZE COSTS.
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Iterative & Incremental
      </h1>

      <p className="text-xl text-gray-700 mb-8">
        Adapt to change and stay on the track at the same time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-12">
        <div className="space-y-4">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-lg text-gray-800">{benefit.text}</span>
            </div>
          ))}

          <div className="pt-16">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Start of the project
            </h3>
            <div className="relative h-2 bg-gray-200 rounded-full w-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>

        <div className="relative min-h-[400px] md:h-[300px] w-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Circle steps */}
            {steps.map((step, index) => {
              const position = getStepPosition(index, steps.length);
              return (
                <div
                  key={step.id}
                  className={`absolute w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200
                    ${
                      activeStep === step.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-300 hover:border-blue-400'
                    }`}
                  style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                  }}
                  onClick={() => setActiveStep(step.id)}
                >
                  {step.id}
                </div>
              );
            })}

            {/* Center content - shows instructions initially, then step content */}
            <AnimatePresence mode="wait">
              {activeStep === null ? (
                <motion.div
                  key="instructions"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-48"
                >
                  <div className="text-lg font-medium">
                    Use <ArrowLeft className="inline w-4 h-4" /> &{' '}
                    <ArrowRight className="inline w-4 h-4" /> arrow keys
                  </div>
                  <div className="text-sm text-blue-600">
                    (or click on the spots to play)
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={`step-${activeStep}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-80"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {steps.find((s) => s.id === activeStep)?.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {steps.find((s) => s.id === activeStep)?.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Circle outline */}
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-gray-200 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <Target className="w-6 h-6 text-blue-600" />
        </div>
        <span className="text-xl font-medium text-gray-800">
          Delivered to client
        </span>
      </div>
    </div>
  );
}
