'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const initialPosts = [
  {
    id: 1,
    title: 'The Role of Prototyping in Product Design',
    excerpt:
      'This iterative process is crucial for addressing potential issues, validating design choices, and',
    date: 'JUN 25, 2024',
    image: '/services/analytics.png',
    slug: '/blogs/blog1',
  },
  {
    id: 2,
    title: 'Designing for User Experience: Key Considerations',
    excerpt:
      'Methods such as user interviews, surveys, and persona development help in gaining insights into user',
    date: 'JUN 24, 2024',
    image: '/services/analytics.png',
    slug: '/blogs/blog1',
  },
  {
    id: 3,
    title: 'The Future of Product Design: Trends to Watch in 2024',
    excerpt:
      'Designers are increasingly focusing on creating products with minimal environmental impact by using',
    date: 'JUN 23, 2024',
    image: '/services/analytics.png',
    slug: '/blogs/blog1',
  },
];

export default function RelatedPosts() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredPostId, setHoveredPostId] = useState<string | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    postId: string
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = (postId: string) => {
    setHoveredPostId(postId);
  };

  const handleMouseLeave = () => {
    setHoveredPostId(null);
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-sm font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-black rounded-full inline-block"></span>{' '}
            Latest Blog
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Stay up to Date with
            <br />
            the Latest News
          </h2>
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-lime-200 hover:bg-lime-300 transition-colors px-4 py-2 rounded-full text-sm font-medium"
            >
              View all blog <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow relative"
              onMouseMove={(e) => handleMouseMove(e, post.id.toString())}
              onMouseEnter={() => handleMouseEnter(post.id.toString())}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={post.slug}>
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-black rounded-full inline-block"></span>{' '}
                    {post.date}
                  </p>
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </Link>

              {hoveredPostId === post.id.toString() && (
                <div
                  className="absolute flex items-center gap-2 text-black font-medium bg-lime-500 px-3 py-1.5 rounded-full pointer-events-none"
                  style={{
                    transform: `translate(-50%, -50%)`,
                    left: mousePosition.x,
                    top: mousePosition.y,
                  }}
                >
                  Read
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
