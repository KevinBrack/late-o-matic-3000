'use client';

import { motion } from 'framer-motion';
import { useExcuseStore } from '@/store/excuse-store';
import { ExcuseCategory } from '@/types';

export function ExcuseGenerator() {
  const { generateExcuse, currentExcuse } = useExcuseStore();

  const categories: ExcuseCategory[] = [
    'classic',
    'sci-fi',
    'corporate',
    'supernatural',
    'environmental',
    'social'
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors"
            onClick={() => generateExcuse(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md text-white font-bold hover:from-purple-700 hover:to-indigo-700 transition-colors mb-6"
        onClick={() => generateExcuse()}
      >
        Generate Random Excuse
      </motion.button>

      {currentExcuse && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-700 rounded-lg p-4"
        >
          <p className="text-xl mb-2">{currentExcuse.text}</p>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Believability: {Math.round(currentExcuse.believabilityScore * 100)}%</span>
            <span>Category: {currentExcuse.category}</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
