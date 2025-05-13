'use client';

import { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/design/SectionHeader';
import Link from 'next/link';
import Image from 'next/image';

export default function AgencyPortfolio() {
  const missionRef = useRef<HTMLDivElement>(null);
  const commitmentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    if (missionRef.current) observer.observe(missionRef.current);
    if (commitmentRef.current) observer.observe(commitmentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div
            ref={missionRef}
            className="text-center transform transition-all duration-1000 opacity-0 translate-y-10"
          >
            <SectionHeader title="Our Mission" />
            <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
              At VietStrix, we build solutions, not just websites.
            </h1>
            <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-500 leading-relaxed">
              Our mission is to bridge technology and business with
              high-performance, scalable, and future-proof solutions. We believe
              that great digital experiences are born from innovation,
              precision, and a relentless drive for optimization. In a world
              that never stops evolving, we stay ahead—by crafting, refining,
              and pushing boundaries with every project we take on.
            </p>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={commitmentRef}
            className="lg:grid lg:grid-cols-2 lg:gap-16 items-center transform transition-all duration-1000 opacity-0 translate-y-10"
          >
            <div className="mb-12 lg:mb-0">
              <SectionHeader title="Our Commitment" />
              <p className="text-lg text-gray-600 leading-relaxed">
                At VietStrix, we don’t just build projects—we build trust. Our
                commitment is simple:{' '}
                <span className="font-semibold">
                  deliver top-tier tech, stay brutally honest, and never settle
                  for “good enough.”
                </span>
              </p>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We move fast, think smart, and always optimize. Whether
                it&apos;s scaling a business, refining an app, or tackling
                complex backend challenges, we’re all in—no shortcuts, no fluff.
                Your success is our mission, and we’re here to make sure you
                <span className="font-semibold">
                  win, not just participate.
                </span>
              </p>
              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                >
                  Contact Us
                  <ArrowUpRight className="ml-2 -mr-1 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="relative rounded-lg overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/ava2.png"
                  alt="Team meeting"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent mix-blend-overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
