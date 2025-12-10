'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

import { NavItem } from '@/types';

const navItems: NavItem[] = [
  {
    name: 'Home',
    link: '#home',
    icon: Home,
    iconClassName: "h-4 w-4 text-purple-500 dark:text-purple-400",
  },
  {
    name: 'About',
    link: '#about',
    icon: User,
    iconClassName: "h-4 w-4 text-pink-500 dark:text-pink-400",
  },
  {
    name: 'Education',
    link: '#education',
    icon: Briefcase,
    iconClassName: "h-4 w-4 text-orange-500 dark:text-orange-400",
  },
  {
    name: 'Projects',
    link: '#projects',
    icon: Briefcase,
    iconClassName: "h-4 w-4 text-blue-500 dark:text-blue-400",
  },
  {
    name: 'Contact',
    link: '#contact',
    icon: Mail,
    iconClassName: "h-4 w-4 text-green-500 dark:text-green-400",
  },
];

interface FloatingNavProps {
  className?: string;
}

export const FloatingNav = ({ className }: FloatingNavProps) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'fixed inset-x-0 top-6 z-50 mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent px-8 py-2 backdrop-blur-sm glow-border',
          'bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 dark:from-purple-500/20 dark:via-pink-500/20 dark:to-blue-500/20',
          'border-purple-500/20 dark:border-purple-500/30',
          className
        )}
      >
        {navItems.map(({ name, link, icon: Icon, iconClassName }: NavItem, idx: number) => (
          <a
            key={`link-${idx}`}
            href={link}
            className={cn(
              'relative flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300',
              'text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400',
              'hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10',
              'hover:scale-105 hover:shadow-lg'
            )}
          >
            <Icon className={cn('h-4 w-4', iconClassName)} />
            <span className="text-sm">{name}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
