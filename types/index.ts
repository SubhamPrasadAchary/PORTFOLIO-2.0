import { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';

export interface NavItem {
  name: string;
  link: string;
  icon: ComponentType<LucideProps>;
  iconClassName?: string;
}
