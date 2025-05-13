'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  return (
    <div className="bg-[#013162] px-4 py-16 md:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-[300px,1fr] lg:grid-cols-[400px,1fr]"
        >
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question:
                  'May I hire a dedicated team of developers for my startup from VietStix?',
                answer:
                  'Yes, we offer dedicated development teams that can work exclusively on your startup project. Our teams are skilled in various technologies and can be scaled according to your needs.',
              },
              {
                question:
                  'Is VietStrix a full-service software development team?',
                answer:
                  'Yes, we provide end-to-end software development services from initial concept and planning through development, testing, deployment, and maintenance.',
              },
              {
                question:
                  'What industries does your software development team have experience in?',
                answer:
                  'We have extensive experience in a variety of industries including healthcare, blogging, small e-commerce, education, portfolios, branded website production and many more.',
              },
              {
                question:
                  'What custom software solutions does your team provide?',
                answer:
                  'We provide web applications, mobile applications, cloud solutions, micro services, and AI/ML integration among other custom software solutions.',
              },
              {
                question:
                  'What methodologies do you use when working with your clients?',
                answer:
                  'We primarily use Agile methodologies like Scrum and Kanban, but can adapt our approach based on client preferences and project',
              },
              {
                question: 'What are your pricing models?',
                answer:
                  'We offer flexible pricing models including fixed price, time and materials, and arrangements to suit different project needs and budgets.',
              },
              {
                question: 'How long does a typical project take?',
                answer:
                  'Project timelines vary depending on complexity and scope. Simple projects can take 2-3 months, while complex solutions can take 6-12 months or more.',
              },
              {
                question: 'How do I start a project with you?',
                answer:
                  'Starting a project begins with an initial consultation where we discuss your requirements, goals, and vision. We then provide a proposal and roadmap for moving forward.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-white/90">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
