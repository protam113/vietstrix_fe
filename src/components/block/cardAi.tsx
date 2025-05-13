import TypingText from '@/components/animata/text/typing-text';
import { cn } from '@/lib/utils';
import { Bot } from 'lucide-react';

function BentoCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden rounded-2xl p-4',
        className
      )}
    >
      {children}
    </div>
  );
}

export function FeatureThree() {
  return (
    <BentoCard className="flex flex-col bg-orange-300">
      <Bot className="size-8 md:size-12" />
      <strong className="mt-1 inline-block text-sm">Products</strong>

      <div className="mt-auto">
        <div className="text-sm font-medium">All product we have</div>
        <div className="font-semibold">
          <TypingText text="Products" waitTime={2000} alwaysVisibleCount={0} />
        </div>
      </div>
    </BentoCard>
  );
}

function BoldCopy({
  text = 'animata',
  className,
  textClassName,
  backgroundTextClassName,
}: {
  text: string;
  className?: string;
  textClassName?: string;
  backgroundTextClassName?: string;
}) {
  if (!text?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        'group relative flex items-center justify-center bg-background px-2 py-2 md:px-6 md:py-4',
        className
      )}
    >
      <div
        className={cn(
          'text-4xl font-black uppercase text-foreground/15 transition-all group-hover:opacity-50 md:text-8xl',
          backgroundTextClassName
        )}
      >
        {text}
      </div>
      <div
        className={cn(
          'text-md absolute font-black uppercase text-foreground transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-8xl',
          textClassName
        )}
      >
        {text}
      </div>
    </div>
  );
}

export function FeatureFive() {
  return (
    <BentoCard className="flex flex-col items-center justify-center bg-zinc-300 ">
      <BoldCopy
        text="Blog"
        className="bg-transparent"
        textClassName="text-zinc-800"
      />
    </BentoCard>
  );
}
