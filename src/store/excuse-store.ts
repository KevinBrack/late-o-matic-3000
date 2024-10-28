import { create } from 'zustand';
import { EXCUSE_TEMPLATES, generateVariable } from '../lib/constants/excuses';
import { ExcuseCategory } from '../types';

interface ExcuseState {
  currentExcuse: string | null;
  currentCategory: ExcuseCategory | null;
  currentBelievabilityScore: number;
  history: Array<{
    text: string;
    category: ExcuseCategory;
    believabilityScore: number;
    timestamp: number;
  }>;
  generateExcuse: (category?: ExcuseCategory) => void;
  shareExcuse: () => Promise<void>;
  clearHistory: () => void;
}

export const useExcuseStore = create<ExcuseState>((set, get) => ({
  currentExcuse: null,
  currentCategory: null,
  currentBelievabilityScore: 0,
  history: [],

  generateExcuse: (category?: ExcuseCategory) => {
    const categories = Object.keys(EXCUSE_TEMPLATES) as ExcuseCategory[];
    const selectedCategory = category || categories[Math.floor(Math.random() * categories.length)];
    const templates = EXCUSE_TEMPLATES[selectedCategory];
    const template = templates[Math.floor(Math.random() * templates.length)];

    let excuse = template.template;
    for (const variable of template.variables) {
      const replacement = String(generateVariable(variable));
      excuse = excuse.replace(new RegExp(`\\{${variable}\\}`, 'g'), replacement);
    }

    set(state => ({
      currentExcuse: excuse,
      currentCategory: selectedCategory,
      currentBelievabilityScore: template.believabilityScore,
      history: [{
        text: excuse,
        category: selectedCategory,
        believabilityScore: template.believabilityScore,
        timestamp: Date.now()
      }, ...state.history].slice(0, 10) // Keep only last 10 excuses
    }));
  },

  shareExcuse: async () => {
    const { currentExcuse } = get();
    if (!currentExcuse) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Late-o-matic 3000 Excuse',
          text: currentExcuse,
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
        // Fallback to clipboard
        await navigator.clipboard.writeText(currentExcuse);
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(currentExcuse);
    }
  },

  clearHistory: () => {
    set({ history: [] });
  }
}));
