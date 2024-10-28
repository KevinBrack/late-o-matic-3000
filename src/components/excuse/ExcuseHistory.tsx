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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 text-center"
      >
        <p className="text-lg text-muted-foreground">
          No excuses used yet. Generate some excuses to see your history!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-card/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-foreground">Your Excuse History</h2>
      <div className="space-y-4">
        {history.map((excuse: HistoryItem, index: number) => (
          <motion.div
            key={excuse.timestamp}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.2 }}
            className="bg-muted/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 group hover:bg-muted/30 transition-colors duration-300"
          >
            <p className="text-lg text-foreground leading-relaxed mb-4">{excuse.text}</p>
            <div className="flex flex-wrap gap-3 items-center text-sm">
              <span className="px-3 py-1.5 bg-background/50 rounded-full border border-white/5 text-muted-foreground">
                {excuse.category}
              </span>
              <span className={`px-3 py-1.5 rounded-full border border-white/5 ${
                excuse.believabilityScore > 0.7 
                  ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                  : excuse.believabilityScore > 0.4 
                  ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' 
                  : 'bg-red-500/10 text-red-400 border-red-500/20'
              }`}>
                Believability: {(excuse.believabilityScore * 100).toFixed(0)}%
              </span>
              <span className="ml-auto text-muted-foreground text-xs">
                {new Date(excuse.timestamp).toLocaleDateString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
