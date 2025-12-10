'use client';

import React from 'react';
import { CardSpotlight } from '@/components/ui/card-spotlight';

const AceternityCard = () => {
  return (
    <CardSpotlight className="max-w-sm mx-auto">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Featured Project
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Built with modern technologies including React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </CardSpotlight>
  );
};

export default AceternityCard;
