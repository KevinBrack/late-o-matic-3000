'use client';

import { motion } from 'framer-motion';
import { useExcuseStore } from '../../store/excuse-store';
import { ExcuseHistory } from './ExcuseHistory';
import { useState } from 'react';

export const ExcuseGenerator = () => {
  const { currentExcuse, currentCategory, currentBelievabilityScore, generateExcuse, shareExcuse } = useExcuseStore();
  const [showHistory, setShowHistory] = useState(false);

  const handleGenerate = () => {
    generateExcuse();
  };

  const handleShare = async () => {
    await shareExcuse();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Late-o-matic 3000</h1>
        
        <div className="space-y-6">
          <button
            onClick={handleGenerate}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Generate Excuse
          </button>

          {currentExcuse && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <p className="text-xl">{currentExcuse}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Category: {currentCategory}</span>
                <span>Believability: {(currentBelievabilityScore * 100).toFixed(0)}%</span>
              </div>
              <button
                onClick={handleShare}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Share Excuse
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
        >
          {showHistory ? 'Hide History' : 'Show History'}
        </button>
      </div>

      {showHistory && <ExcuseHistory />}
    </div>
  );
};
