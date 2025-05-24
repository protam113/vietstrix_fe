import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface IGetStartedButtonProps {
  text: string;
  className?: string;
  url: string;
  isScrolling?: boolean;
}
export default function GetStartedButton({
  text = 'Get started',
  className,
  url,
  isScrolling,
}: IGetStartedButtonProps) {
  return (
    <Link href={url} className="min-h-12  w-48">
      <button
        className={cn(
          ' group flex h-[75px] w-40 items-center justify-center gap-3  p-2 font-bold transition-colors duration-100 ease-in-out hover:bg-main-800 bg-main',

          className
        )}
      >
        <span
          className={cn(
            'text-black-600 transition-colors duration-100 ease-in-out  text-white  '
          )}
        >
          {text}
        </span>
        <div
          className={cn(
            'relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full transition-transform duration-100 bg-white',
            ' group-hover:bg-blue-200/40'
          )}
        >
          <div className="absolute left-0 flex h-7 w-14 -translate-x-1/2 items-center justify-center transition-all duration-200 ease-in-out group-hover:translate-x-0">
            <ArrowRight
              size={16}
              className={cn(
                'size-7 transform p-1  opacity-0 group-hover:opacity-100 text-main group-hover:text-white'
              )}
            />
            <ArrowRight
              size={16}
              className={cn(
                'size-7 transform p-1  opacity-100 transition-transform duration-300 ease-in-out group-hover:opacity-0 text-main group-hover:text-white'
              )}
            />
          </div>
        </div>
      </button>
    </Link>
  );
}
