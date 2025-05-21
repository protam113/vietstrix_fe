import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface PremiumLoaderProps {
  onLoadingComplete?: () => void;
}
export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export interface SectionHeaderProps {
  title: string;
  className?: string;
}

export interface Card {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features?: string[];
}

export interface HeaderProps {
  title: string;
  className?: string;
}
