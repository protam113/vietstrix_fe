'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useInView, motion } from 'framer-motion';
import Container from '@/components/container/container';
import SectionHeader from '@/components/design/SectionHeader';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

export default function WellnessPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/services');
  };
  return (
    <Container className=" mx-auto">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sticky Text Panel */}
        <div className="w-full lg:w-2/5 lg:sticky lg:top-2 lg:h-screen flex flex-col justify-start p-8 lg:p-16 bg-white">
          <div className="max-w-md mx-auto lg:mx-0">
            <SectionHeader title="What We Do" />

            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Social Square's visual showcase, a curated gallery
              capturing the essence of our creative space. Our collection of
              images transports you to a world where work and inspiration
              seamlessly intertwine.
            </p>
            <Button
              variant="outline"
              onClick={handleClick}
              className="bg-[#003049] border-zinc-800 text-white hover:bg-[#003049]/60 hover:text-white rounded-none"
            >
              See All Services
            </Button>
          </div>
        </div>

        {/* Scrollable Image Gallery */}
        <div className="w-full lg:w-3/5 p-4 lg:p-8 bg-white">
          <div className="space-y-12 md:space-y-16">
            <ServiceProps
              src="/imgs/banner4.jpg?height=500&width=700"
              alt="Colorful abstract painting in exhibition space"
              caption="'Harmony in Color' by Nguyen Van Minh, Oil on Canvas, 2023"
              title="Title1"
            />
            <ServiceProps
              src="/imgs/banner4.jpg?height=500&width=700"
              alt="Collaborative workspace with people working at a table"
              caption="Creative minds collaborating in our shared workspace"
              title="Title1"
            />
            <ServiceProps
              src="/imgs/banner4.jpg?height=500&width=700"
              alt="Gallery wall with framed artwork"
              caption="Contemporary Vietnamese art on display in our main gallery"
              title="Title1"
            />
            <ServiceProps
              src="/imgs/banner4.jpg?height=500&width=700"
              alt="Gallery hallway with multiple artworks displayed"
              caption="The North Wing exhibition space featuring works from emerging artists"
              title="Title1"
            />
            <ServiceProps
              src="/imgs/banner4.jpg?height=500&width=700"
              alt="Colorful portraits displayed on white wall with pedestals"
              caption="'Neon Portraits' installation by Thu Tran, Mixed Media, 2024"
              title="Title1"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function ServiceProps({
  src,
  alt,
  caption,
  title,
}: {
  src: string;
  alt: string;
  caption?: string;
  title: string;
}) {
  const ref = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovering, setIsHovering] = useState(false);

  // Handle mouse movement over the image
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        transform: isInView ? 'none' : 'translateY(50px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
      }}
    >
      <div
        ref={imageRef}
        className="relative aspect-[4/3] w-full overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Image
          src={src || '/placeholder.svg'}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80" />

        {isHovering && (
          <motion.div
            className="absolute flex items-center gap-2 text-white font-medium bg-black/70 px-3 py-1.5 pointer-events-none"
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              opacity: 1,
              scale: 1,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.1 }}
            style={{
              transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`,
            }}
          >
            view more
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>
        )}
      </div>
      {caption && (
        <div>
          <h3 className="mt-2 text-lg font-bold text-main italic">{title}</h3>
          <p className="mt-2 text-sm text-gray-500 italic">{caption}</p>
        </div>
      )}
    </div>
  );
}
