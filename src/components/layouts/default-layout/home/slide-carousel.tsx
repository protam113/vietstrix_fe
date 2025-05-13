import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/container/container';
import SectionHeader from '@/components/design/SectionHeader';

export default function NomineesPage() {
  return (
    <Container>
      <SectionHeader title="Blogs" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <h1 className="text-5xl font-bold text-[#222] sm:text-6xl md:text-7xl lg:text-8xl">
              Our Blogs
            </h1>
            <div className="absolute -right-6 bottom-0 md:-right-8">
              <Image
                src="LogoCricle.svg"
                width={40}
                height={40}
                alt="Laurel icon"
                className="h-8 w-8 md:h-10 md:w-10"
              />
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 md:text-base">
            Explore in-depth case studies showcasing our latest web projects,
            highlighting design, development, and performance insights.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nominees.map((nominee) => (
            <NomineeCard key={nominee.id} nominee={nominee} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/blogs"
            className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-black"
          >
            Check out all blogs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Container>
  );
}

interface Nominee {
  id: number;
  title: string;

  image: string;
}

function NomineeCard({ nominee }: { nominee: Nominee }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg">
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={nominee.image || '/placeholder.svg'}
          alt={nominee.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="font-medium">{nominee.title}</div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">by</span>
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-full">
              <Image
                src="LogoCricle.svg"
                alt="Profile Image"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm">VietStrix</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const nominees: Nominee[] = [
  {
    id: 1,
    title: 'Portfolio 25',

    image: '/image/portfolio/blog 1.png',
  },
  {
    id: 2,
    title: 'Mario Roudil',

    image: '/image/portfolio/news 1.png',
  },
  {
    id: 3,
    title: 'Investor 3D Website | PeachWeb',

    image: '/image/portfolio/build 1.png',
  },
];
