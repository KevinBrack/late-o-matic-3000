import { create } from 'zustand';
import { ExcuseCategory, GeneratedExcuse, ExcuseHistory } from '../types';
import { EXCUSE_TEMPLATES } from '../lib/constants/excuses';
import { replaceVariables, calculateBelievability } from '../lib/utils/excuse-generator';

interface ExcuseStore {
  history: ExcuseHistory;
  currentExcuse: GeneratedExcuse | null;
  generateExcuse: (category?: ExcuseCategory) => GeneratedExcuse;
  clearHistory: () => void;
  removeExcuse: (id: string) => void;
}

const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const getDayOfWeek = (): string => {
  return new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
};

const getTimeOfDay = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 17) return 'afternoon';
  return 'evening';
};

export const useExcuseStore = create<ExcuseStore>((set, get) => ({
  history: {
    excuses: [],
    lastUsed: {
      classic: null,
      'sci-fi': null,
      corporate: null,
      supernatural: null,
      environmental: null,
      social: null,
    },
  },
  currentExcuse: null,

  generateExcuse: (category?: ExcuseCategory) => {
    const selectedCategory = category || getRandomElement(Object.keys(EXCUSE_TEMPLATES) as ExcuseCategory[]);
    const template = getRandomElement(EXCUSE_TEMPLATES[selectedCategory]);
    
    const excuseText = replaceVariables(template.template);
    const believabilityScore = calculateBelievability(excuseText);
    
    const generatedExcuse: GeneratedExcuse = {
      id: crypto.randomUUID(),
      text: excuseText,
      category: selectedCategory,
      timestamp: new Date(),
      believabilityScore,
      context: {
        timeOfDay: getTimeOfDay(),
        dayOfWeek: getDayOfWeek() as any,
      },
    };

    set((state) => ({
      currentExcuse: generatedExcuse,
      history: {
        excuses: [generatedExcuse, ...state.history.excuses],
        lastUsed: {
          ...state.history.lastUsed,
          [selectedCategory]: new Date(),
        },
      },
    }));

    return generatedExcuse;
  },

  clearHistory: () => {
    set((state) => ({
      history: {
        excuses: [],
        lastUsed: Object.fromEntries(
          Object.keys(state.history.lastUsed).map(key => [key, null])
        ) as Record<ExcuseCategory, null>,
      },
    }));
  },

  removeExcuse: (id: string) => {
    set((state) => ({
      history: {
        ...state.history,
        excuses: state.history.excuses.filter(excuse => excuse.id !== id),
      },
    }));
  },
}));
