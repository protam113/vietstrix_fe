'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/design/SectionHeader';
import Container from '@/components/container/container';

export default function WellnessPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      id: '01',
      title: 'Web Development',
      link: '/services/web-development',
      description:
        'At VietStrix, we specialize in crafting custom websites that not only reflect your brand identity but are also scalable and personalized to meet your unique business goals.',
      image: '/WebDev.webp?height=250&width=450',
      features: [
        'Tailored Experiences: Websites designed specifically to meet your brand’s unique vision and audience.',
        'User-Centric Design: Crafting exceptional user interfaces that boost engagement and drive conversions.',
        'Scalable Solutions: Building websites that grow with your business, ensuring long-term success.',
      ],
    },
    {
      id: '02',
      title: 'Custom Web Design',
      link: '/services/ux-ui-design',
      description:
        'We create captivating visual identities that communicate your brand’s core values and resonate deeply with your audience, ensuring consistency across all platforms.',
      image: '/WebDes.webp?height=250&width=450',
      features: [
        'Brand Identity Design: Memorable logos and visuals that authentically represent your brand.',
        'Comprehensive Brand Strategy: Detailed guidelines ensuring brand consistency across digital and offline media.',
        'Multi-Platform Assets: Professional designs for your online presence and marketing materials.',
      ],
    },
    {
      id: '03',
      title: 'Web Revamp',
      link: '/services/web-revamp',
      description:
        'Our data-driven strategies focus on optimizing your site’s performance, increasing visibility, and driving qualified traffic, ensuring your web presence evolves with your business.',
      image: '/Image/team.jpg?height=250&width=450',
      features: [
        'SEO Optimization: Boost your site’s search engine rankings with effective SEO strategies.',
        'Content Marketing: Create compelling content that attracts and retains your target audience.',
        'Advanced Analytics: Leverage detailed insights to refine strategies and maximize web performance.',
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? index : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-24 bg-white overflow-hidden"
    >
      <Container>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div
            variants={titleVariants}
            className="flex flex-col mb-12 md:flex-row md:justify-between"
          >
            <div className="mb-6 md:mb-0">
              <SectionHeader title="Our Services" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Service We Offer
              </h2>
            </div>
            <div className="md:w-1/2">
              <motion.p
                variants={titleVariants}
                className="text-gray-600 max-w-2xl mb-8"
              >
                We offer a full suite of website development services designed
                to elevate your online presence. From custom website creation to
                responsive design, e-commerce solutions, and ongoing support, we
                ensure your business stands out in the digital landscape.
              </motion.p>
              <motion.div variants={titleVariants}>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-300"
                >
                  See All Services
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <div className="mt-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="border-t border-gray-200"
              >
                <div
                  onClick={() => toggleAccordion(index)}
                  className="py-6 flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-6 w-12 text-left">{`(${service.id})`}</span>
                    <h3 className="text-2xl md:text-3xl font-medium text-gray-900 group-hover:text-gray-700 group-hover:underline transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-900"
                  >
                    {activeIndex === index ? (
                      <Minus size={24} />
                    ) : (
                      <Plus size={24} />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={contentVariants}
                      className="overflow-hidden pb-8"
                    >
                      <div className="pl-16 pr-4 grid md:grid-cols-[1fr_1.5fr] gap-6">
                        <div className="mb-6 md:mb-0">
                          <Image
                            src={service.image || '/placeholder.svg'}
                            alt={service.title}
                            width={450}
                            height={250}
                            className="rounded-md shadow-md"
                          />
                        </div>
                        <div>
                          <p className="text-gray-600 mb-6">
                            {service.description}
                          </p>
                          <ul className="space-y-4 mb-6">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={`${service.link}`}
                            className="inline-flex items-center text-gray-900 font-medium group"
                          >
                            <span className="group-hover:mr-2 transition-all duration-300">
                              VIEW DETAILS
                            </span>
                            <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
