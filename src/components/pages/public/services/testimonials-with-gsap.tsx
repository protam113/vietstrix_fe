// 'use client';

// import type React from 'react';

// import { useEffect, useRef, useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import SectionHeader from '@/components/design/SectionHeader';

// // Register GSAP plugins
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// // Sample testimonial data - replace with your actual data
// const testimonials = [
//   {
//     id: 1,
//     quote:
//       "FitLife's digital transformation has been phenomenal! The team created a vibrant community for our members and produced exceptional video content that truly represents our brand. It's been a game-changer for our engagement and growth.",
//     author: 'Daniel Smith',
//     title: 'CEO, EcoSolutions',
//     avatar: '/placeholder.svg?height=60&width=60',
//   },
//   {
//     id: 2,
//     quote:
//       'Working with this team has transformed our online presence completely. Their attention to detail and creative approach helped us stand out in a crowded market.',
//     author: 'Rachel Adams',
//     title: 'Founder, Travelista',
//     avatar: '/placeholder.svg?height=60&width=60',
//   },
//   {
//     id: 3,
//     quote:
//       'The level of professionalism and technical expertise is outstanding. Our project was delivered on time and exceeded all expectations.',
//     author: 'John Martinez',
//     title: 'Operations',
//     avatar: '/placeholder.svg?height=60&width=60',
//   },
// ];

// export default function TestimonialsWithGSAP() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const headingRef = useRef<HTMLDivElement>(null);
//   const testimonialRef = useRef<HTMLDivElement>(null);
//   const progressRef = useRef<HTMLDivElement>(null);
//   const progressBarRef = useRef<HTMLDivElement>(null);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   // Set up GSAP animations on scroll
//   useEffect(() => {
//     if (!sectionRef.current || !headingRef.current || !testimonialRef.current)
//       return;

//     // Heading animation
//     gsap.fromTo(
//       headingRef.current.children,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.2,
//         duration: 0.8,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 80%',
//         },
//       }
//     );

//     // Initial testimonial animation
//     gsap.fromTo(
//       testimonialRef.current,
//       { opacity: 0, x: 50 },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 0.8,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 60%',
//         },
//       }
//     );

//     return () => {
//       // Clean up ScrollTrigger instances
//       ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
//     };
//   }, []);

//   // Handle auto-sliding with GSAP animation
//   useEffect(() => {
//     if (isPaused) {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//       if (progressBarRef.current) {
//         gsap.killTweensOf(progressBarRef.current);
//       }
//       return;
//     }

//     // Reset and animate progress bar
//     if (progressBarRef.current) {
//       gsap.set(progressBarRef.current, { width: '0%' });
//       gsap.to(progressBarRef.current, {
//         width: '100%',
//         duration: 3,
//         ease: 'none',
//         onComplete: () => {
//           setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//         },
//       });
//     }

//     // Clear any existing timeout
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     // Set timeout as a backup in case animation fails
//     timeoutRef.current = setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 3000);

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//       if (progressBarRef.current) {
//         gsap.killTweensOf(progressBarRef.current);
//       }
//     };
//   }, [currentIndex, isPaused]);

//   // Animate testimonial change
//   useEffect(() => {
//     if (!testimonialRef.current) return;

//     gsap.fromTo(
//       testimonialRef.current,
//       { opacity: 0, x: 50 },
//       { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
//     );
//   }, [currentIndex]);

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   // Enable touch swipe on mobile
//   const touchStartX = useRef(0);
//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     const touchEndX = e.changedTouches[0].clientX;
//     const diff = touchStartX.current - touchEndX;

//     if (diff > 50) {
//       // Swipe left, go to next
//       goToNext();
//     } else if (diff < -50) {
//       // Swipe right, go to previous
//       goToPrevious();
//     }
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="py-16 md:py-24 bg-white overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         <div ref={headingRef} className=" mb-12">
//           <SectionHeader title="TESTIMONIALS" />
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//             Hear From Customers
//           </h2>
//         </div>

//         <div className="relative max-w-4xl mx-auto">
//           {/* Progress Bar */}
//           <div
//             ref={progressRef}
//             className="h-1 w-full bg-gray-200 rounded-full mb-8 overflow-hidden"
//           >
//             <div
//               ref={progressBarRef}
//               className="h-full bg-gray-800 rounded-full"
//             />
//           </div>

//           {/* Testimonial Slider */}
//           <div
//             className="relative min-h-[300px] md:min-h-[250px]"
//             onTouchStart={handleTouchStart}
//             onTouchEnd={handleTouchEnd}
//           >
//             <div
//               ref={testimonialRef}
//               key={currentIndex}
//               className="flex flex-col items-center"
//             >
//               <div className="text-5xl text-gray-400 mb-6">"</div>
//               <p className="text-lg md:text-xl text-gray-700 text-center mb-8">
//                 {testimonials[currentIndex].quote}
//               </p>
//               <div className="flex items-center gap-4">
//                 <img
//                   src={'/logo.png'}
//                   alt={testimonials[currentIndex].author}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div className="text-left">
//                   <h4 className="font-semibold text-gray-900">
//                     {testimonials[currentIndex].author}
//                   </h4>
//                   <p className="text-sm text-gray-500">
//                     {testimonials[currentIndex].title}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={goToPrevious}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft className="h-6 w-6 text-gray-600" />
//           </button>
//           <button
//             onClick={goToNext}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
//             aria-label="Next testimonial"
//           >
//             <ChevronRight className="h-6 w-6 text-gray-600" />
//           </button>

//           {/* Pagination Dots */}
//           <div className="flex justify-center mt-8 gap-2">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`rounded-full transition-all duration-300 ${
//                   index === currentIndex
//                     ? 'bg-gray-800 w-6 h-2.5'
//                     : 'bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5'
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
