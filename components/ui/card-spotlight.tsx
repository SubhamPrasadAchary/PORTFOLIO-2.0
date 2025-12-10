'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardSpotlightProps {
  children: React.ReactNode;
  className?: string;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-1 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-white dark:bg-gray-800 rounded-xl">
        {children}
      </div>
    </motion.div>
  );
};
