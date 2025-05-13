'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Link from 'next/link';
import SectionHeader from '@/components/design/SectionHeader';
import ProcessTimeline from '@/components/container/ProcessTimeline';
import Container from '@/components/container/container';
import { StatsSection } from '@/components/design/StatsSection';
import IntroSection from '@/components/pages/public/introSection';
import { ContactForm } from '@/components/form/ContactForm';
import HeroGeometric from '@/components/pages/public/our-team/AboutHeroBanner';
import AgencyPortfolio from '@/components/pages/public/our-team/AgencyPortfolio';

export const Feedback = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mx-auto mb-12"
      >
        <SectionHeader title="Why Say Our Customers" />
        <p className="text-gray-600">
          Our clients are our priority. Discover what they have to say about
          their experience with us and how through our dedication and
          professionalism we can deliver results that exceed expectations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            name: 'Danh Thuong L.',
            image: '/image/web.png',
            text: 'Working for my new home is absolutely amazing with Renovex. They have done great job with my home renovation. They have great communication skills.',
          },
          {
            name: 'Soranik',
            image: '/image/web.png',
            text: 'Our office renovation exceeded all expectations! The Renovex team transformed our outdated workspace into a modern, innovative space. They handled every challenge professionally and delivered on time.',
          },
          {
            name: 'Thomas G.',
            image: '/image/web.png',
            text: 'We hired them for our outdoor landscaping and pool construction project. Their attention to detail and commitment to quality was impressive. The end result exceeded our expectations and transformed our backyard.',
          },
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#013162] text-[#013162]"
                />
              ))}
            </div>
            <p className="text-gray-600 mb-4">{testimonial.text}</p>
            <div className="flex items-center gap-3">
              <Image
                src={testimonial.image || '/placeholder.svg'}
                alt={testimonial.name}
                width={60}
                height={60}
                className="w-12 h-12 rounded-full"
              />
              <span className="font-medium">{testimonial.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default function Page() {
  return (
    <>
      <SEO
        title="Our Team"
        description="VietStrix is ​​a genZ team that designs and develops professional websites in Vietnam."
      />

      <div>
        <HeroGeometric />
        <IntroSection />
        <StatsSection />
        <AgencyPortfolio />

        {/* Team Section */}
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mx-auto mb-12"
          >
            <SectionHeader title="Our Team" />
            <p className="text-gray-600">
              Our success is built on the dedication and expertise of our team.
              We work together to bring innovative ideas and exceptional
              craftsmanship to every project, ensuring the highest quality
              results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Hoang Pham Minh',
                role: 'Project Manager',
                image: '/bg/av3.jpg',
                href: '/our-team/HoangPham',
              },
              {
                name: 'Tran Thanh Hoang',
                role: 'Back-end Developer',
                image: '/bg/av2.jpg',
                href: '/our-team/HoangPham',
              },
              {
                name: 'Nguyen Thanh Hao',
                role: 'Front-end Developer',
                image: '/bg/av1.jpg',
                href: '/our-team/HoangPham',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <Link href={member.href}>
                  <div className="relative">
                    <Image
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>

        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">How We do Work</h2>
            <p className="text-gray-600">
              We follow a collaborative and transparent approach to every
              project, ensuring clear communication at every stage. From initial
              concept to final delivery.
            </p>
          </motion.div>
          <div className="mt-8">
            <ProcessTimeline />
          </div>
        </section>
        <Feedback />
        {/* CTA Section */}
        <ContactForm />
      </div>
    </>
  );
}
