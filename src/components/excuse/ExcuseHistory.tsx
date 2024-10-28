'use client';

import { motion } from 'framer-motion';
import { useExcuseStore } from '../../store/excuse-store';
import { ExcuseCategory } from '../../types';

interface HistoryItem {
  text: string;
  category: ExcuseCategory;
  believabilityScore: number;
  timestamp: number;
}

export const ExcuseHistory = () => {
  const history = useExcuseStore((state) => state.history) as HistoryItem[];

  if (history.length === 0) {
    return (
      <div className="text-center p-4 text-gray-500">
        No excuses used yet. Generate some excuses to see your history!
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold mb-4">Your Excuse History</h2>
      {history.map((excuse: HistoryItem, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
        >
          <p className="text-lg">{excuse.text}</p>
          <div className="mt-2 flex justify-between text-sm text-gray-500">
            <span>Category: {excuse.category}</span>
            <span>Believability: {(excuse.believabilityScore * 100).toFixed(0)}%</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
