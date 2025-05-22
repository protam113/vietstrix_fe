// @ts-nocheck

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/design/SectionHeader';

export default function ContactServiceUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 mt-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <motion.div variants={itemVariants}>
              <SectionHeader title="Contact " design="Us" />

              <p className="text-lg text-gray-700 mb-10">
                Get in Touch with Hust4L. We're here to bring your ideas to
                life. Let's start a conversation!
              </p>
            </motion.div>

            <div className="space-y-10">
              <motion.div variants={itemVariants} className="space-y-2">
                <h2 className="text-xl font-semibold mb-2">Email</h2>
                <p className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 mr-2 text-gray-500" />
                  <a
                    href="mailto:info@hanhsocial.com"
                    className="hover:text-rose-600 transition-colors"
                  >
                    info@hanhsocial.com
                  </a>
                </p>
                <p className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 mr-2 text-gray-500 opacity-0" />
                  <a
                    href="mailto:support@hanhsocial.com"
                    className="hover:text-rose-600 transition-colors"
                  >
                    support@tello.com
                  </a>
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <h2 className="text-xl font-semibold mb-2">Phone</h2>
                <p className="flex items-center text-gray-700">
                  <Phone className="w-4 h-4 mr-2 text-gray-500" />
                  <a
                    href="tel:+18001234567"
                    className="hover:text-rose-600 transition-colors"
                  >
                    +84 (800) 123-4567
                  </a>
                </p>
                <p className="flex items-center text-gray-700">
                  <Phone className="w-4 h-4 mr-2 text-gray-500 opacity-0" />
                  <a
                    href="tel:+18009876543"
                    className="hover:text-rose-600 transition-colors"
                  >
                    +84 (800) 987-6543
                  </a>
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <h2 className="text-xl font-semibold mb-2">Address</h2>
                <p className="flex items-start text-gray-700">
                  <MapPin className="w-4 h-4 mr-2 mt-1 text-gray-500" />
                  <span>Ho Chi Minh City, VietNam, 90001</span>
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
                <div className="flex items-start text-gray-700">
                  <Clock className="w-4 h-4 mr-2 mt-1 text-gray-500" />
                  <div className="space-y-1">
                    <div className="grid grid-cols-2 gap-8">
                      <p>Monday to Friday</p>
                      <p>9:00 AM – 6:00 PM</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <p>Saturday</p>
                      <p>10:00 AM – 4:00 PM</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <p>Sunday</p>
                      <p>Closed</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div variants={itemVariants} className="space-y-6 mt-28">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Smiskiiiii"
                  required
                  className="w-full p-3 border border-gray-200 rounded-md transition-colors hover:border-gray-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ugc_creator@hanhsocial.com"
                  required
                  className="w-full p-3 border border-gray-200 rounded-md transition-colors hover:border-gray-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-gray-700">
                  Phone Number
                </label>
                <Input
                  id="phone_number"
                  placeholder="(+00)000000"
                  className="w-full p-3 border border-gray-200 rounded-md transition-colors hover:border-gray-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Message"
                  className="w-full p-3 border border-gray-200 rounded-md min-h-[180px] transition-colors hover:border-gray-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded-md uppercase tracking-wide font-medium hover:bg-lime-600 transition-colors"
              >
                Reach Us
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
