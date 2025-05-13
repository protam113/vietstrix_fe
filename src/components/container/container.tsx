import { ContainerProps } from '@/types/components.type';

export default function Container({ children, className }: ContainerProps) {
  return (
    <main
      className={`max-w-7xl sm:w-full lg:max-w-8xl mx-auto container py-4  ${className}`}
    >
      {children}
    </main>
  );
}
