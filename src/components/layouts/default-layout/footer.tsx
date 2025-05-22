'use client';

import Link from 'next/link';
import { ArrowRight, Facebook, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const items = [
    { id: 1, label: 'Services', href: '/services' },
    { id: 2, label: 'Blogs', href: '/blogs' },
    { id: 3, label: 'Projects', href: '/our-team/projects' },
  ];

  return (
    <footer className="bg-black text-white min-h-[600px] flex flex-col justify-between p-8 md:p-12">
      <div className="space-y-12">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <p className="text-sm text-zinc-400">
              VietStrix accompanies your ideas
            </p>
            <motion.h2
              className="text-2xl md:text-4xl lg:text-5xl font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              vietstrix@gmail.com
            </motion.h2>
          </div>
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#DEFF0A] text-black p-6 rounded-2xl space-y-2 cursor-pointer"
            >
              <Link href="/contact-us">
                <p className="text-xl font-medium">Get Started</p>
                <div className="flex items-center gap-2">
                  <span>Go</span>
                  <ArrowRight className="size-4" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-between pt-12">
          <nav className="space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ x: 10 }}
                className="overflow-hidden"
              >
                <Link
                  href={item.href}
                  className="text-xl md:text-2xl lg:text-3xl font-medium hover:text-zinc-300 transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="text-right space-y-1">
            <h3 className="text-xl md:text-2xl font-medium">Contact</h3>
            <p className="text-zinc-400">vietstrix@gmail.com</p>
            <p className="text-zinc-400">+84 377783437</p>
            <p className="text-zinc-400">+84 906723985</p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          VietStrix
        </motion.h1>

        <div className="bg-[#013162] -mx-8 md:-mx-12 px-8 md:px-12 py-4">
          <div className="flex flex-wrap gap-4 justify-between items-center text-sm">
            <p>Copyright &copy; VietStrix {CURRENT_YEAR}</p>
            <div className="flex items-center gap-6">
              <motion.a
                href="https://www.linkedin.com/in/hoangpham-strix/"
                whileHover={{ scale: 1.2 }}
                className="hover:text-zinc-300 transition-colors"
              >
                <Linkedin className="size-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/vietstrix"
                whileHover={{ scale: 1.2 }}
                className="hover:text-zinc-300 transition-colors"
              >
                <Facebook className="size-5" />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="https://github.com/protam113"
                whileHover={{ scale: 1.2 }}
                className="hover:text-zinc-300 transition-colors"
              >
                <Github className="size-5" />
                <span className="sr-only">Github</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
