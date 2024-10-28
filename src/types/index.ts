export type ExcuseCategory = 
  | 'classic'
  | 'sci-fi'
  | 'corporate'
  | 'supernatural'
  | 'environmental'
  | 'social';

export type DayOfWeek = 
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export interface ExcuseTemplate {
  id: string;
  category: ExcuseCategory;
  template: string;
  variables: string[];
  believabilityScore: number;
  timeConstraints?: {
    validHours: number[];
    validDays: DayOfWeek[];
  };
}

export interface GeneratedExcuse {
  id: string;
  text: string;
  category: ExcuseCategory;
  timestamp: Date;
  believabilityScore: number;
  context: {
    weather?: string;
    timeOfDay: string;
    dayOfWeek: DayOfWeek;
  };
}

export interface ExcuseHistory {
  excuses: GeneratedExcuse[];
  lastUsed: Record<ExcuseCategory, Date | null>;
}
