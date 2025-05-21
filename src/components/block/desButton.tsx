import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  normal: string;
  main: string;
  url: string;
}

export const DesButton: FC<Props> = ({ normal, main, url }) => {
  return (
    <Link href={url}>
      {/* Khối VietStrix */}
      <div className="group relative h-full flex flex-col justify-end rounded-md bg-main p-4 text-2xl tracking-tight text-gray-100 md:text-4xl w-full">
        <div className="font-light">{normal}</div>
        <div className="-mt-2 font-bold">{main}</div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full border bg-white transition-all duration-700 group-hover:rotate-[360deg] md:h-8 md:w-8">
          <ArrowRight size={16} className="text-main" />
        </div>
        <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-white opacity-50 transition-all duration-700  group-hover:bg-green-300" />
      </div>
    </Link>
  );
};
