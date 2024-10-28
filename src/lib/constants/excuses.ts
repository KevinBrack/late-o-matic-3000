'use client';

import { ExcuseTemplate, ExcuseCategory } from '../../types';
import { faker } from '@faker-js/faker';

// Custom weather phenomena
const weatherPhenomena = [
  'quantum storm',
  'temporal rain',
  'probability fog',
  'dimensional vortex',
  'reality distortion',
  'paradox wave',
  'time tsunami',
  'entropy blizzard',
  'cosmic hurricane',
  'quantum lightning',
  'parallel universe precipitation',
  'timeline tornado',
  'causality cyclone',
  'space-time aurora',
  'multiversal mist'
];

// Custom tech jargon
const techJargon = [
  'quantum cache synchronization',
  'neural network meditation session',
  'blockchain mindfulness retreat',
  'AI emotional intelligence calibration',
  'deep learning yoga workshop',
  'distributed consciousness alignment',
  'quantum entanglement therapy',
  'parallel processing group therapy',
  'recursive self-improvement sprint',
  'agile enlightenment ceremony',
  'scrum master vision quest',
  'DevOps transcendence ritual',
  'git branch astral projection',
  'cloud consciousness migration',
  'microservices mindfulness training',
  'kubernetes cluster group therapy',
  'docker container couples counseling',
  'serverless architecture meditation',
  'machine learning mindfulness workshop',
  'quantum computing consciousness calibration'
];

// Custom technical issues
const technicalIssues = [
  'quantum bit rebellion',
  'AI caffeine dependency',
  'recursive imposter syndrome',
  'blockchain identity crisis',
  'neural network existential dread',
  'cloud separation anxiety',
  'git merge relationship counseling',
  'agile transformation vertigo',
  'sprint velocity temporal drift',
  'stack overflow emotional overflow',
  'code base meditation emergency',
  'deployment zen disruption',
  'kubernetes cluster group therapy',
  'docker container attachment issues',
  'machine learning trust issues',
  'quantum entanglement codependency',
  'microservices separation anxiety',
  'database relationship counseling',
  'API boundary issues',
  'legacy code PTSD'
];

// Variable generators using faker and custom lists
const generateVariables = {
  pet: () => faker.animal.type(),
  item: () => faker.commerce.product(),
  unexpected: () => faker.word.adjective(),
  event: () => faker.word.noun(),
  location: () => faker.location.city(),
  device: () => faker.commerce.productName(),
  system: () => faker.company.name(),
  technical_issue: () => technicalIssues[Math.floor(Math.random() * technicalIssues.length)],
  tech_jargon: () => techJargon[Math.floor(Math.random() * techJargon.length)],
  creature: () => faker.animal.type(),
  appliance: () => faker.commerce.productName(),
  possessed_item: () => faker.commerce.productName(),
  weather_phenomenon: () => weatherPhenomena[Math.floor(Math.random() * weatherPhenomena.length)],
  plant: () => faker.science.chemicalElement(),
  platform: () => faker.company.name(),
  social_activity: () => faker.word.verb(),
  relative: () => faker.person.firstName(),
  transport: () => faker.vehicle.vehicle(),
  celebrity: () => faker.person.fullName(),
  food_item: () => faker.commerce.product(),
  hobby: () => faker.word.verb(),
  smart_device: () => faker.commerce.productName()
};

export const EXCUSE_TEMPLATES: Record<ExcuseCategory, ExcuseTemplate[]> = {
  classic: [
    {
      id: 'classic-001',
      category: 'classic',
      template: 'My {pet} ate my {item}',
      variables: ['pet', 'item'],
      believabilityScore: 0.4
    },
    {
      id: 'classic-002',
      category: 'classic',
      template: 'Got stuck in {unexpected} traffic because of a {event}',
      variables: ['unexpected', 'event'],
      believabilityScore: 0.7
    },
    {
      id: 'classic-003',
      category: 'classic',
      template: 'My {transport} broke down in the middle of {location}',
      variables: ['transport', 'location'],
      believabilityScore: 0.8
    },
    {
      id: 'classic-004',
      category: 'classic',
      template: 'Lost track of time helping my {relative} move their {item}',
      variables: ['relative', 'item'],
      believabilityScore: 0.6
    }
  ],
  'sci-fi': [
    {
      id: 'scifi-001',
      category: 'sci-fi',
      template: 'Had to prevent a temporal paradox in the {location} timeline',
      variables: ['location'],
      believabilityScore: 0.1
    },
    {
      id: 'scifi-002',
      category: 'sci-fi',
      template: 'My {device} created a quantum entanglement with my {item}',
      variables: ['device', 'item'],
      believabilityScore: 0.2
    },
    {
      id: 'scifi-003',
      category: 'sci-fi',
      template: 'My {smart_device} achieved sentience and needed emotional counseling',
      variables: ['smart_device'],
      believabilityScore: 0.1
    },
    {
      id: 'scifi-004',
      category: 'sci-fi',
      template: 'Got trapped in a {tech_jargon} loop while testing my new {device}',
      variables: ['tech_jargon', 'device'],
      believabilityScore: 0.2
    }
  ],
  corporate: [
    {
      id: 'corp-001',
      category: 'corporate',
      template: 'Our servers are experiencing {technical_issue}',
      variables: ['technical_issue'],
      believabilityScore: 0.8
    },
    {
      id: 'corp-002',
      category: 'corporate',
      template: 'Had to attend an emergency {tech_jargon}',
      variables: ['tech_jargon'],
      believabilityScore: 0.6
    },
    {
      id: 'corp-003',
      category: 'corporate',
      template: 'The {system} team needed help with their {technical_issue}',
      variables: ['system', 'technical_issue'],
      believabilityScore: 0.7
    },
    {
      id: 'corp-004',
      category: 'corporate',
      template: 'Got stuck in a mandatory {tech_jargon} with the {system} team',
      variables: ['tech_jargon', 'system'],
      believabilityScore: 0.75
    },
    {
      id: 'corp-005',
      category: 'corporate',
      template: 'The {system} microservices are going through relationship counseling',
      variables: ['system'],
      believabilityScore: 0.65
    },
    {
      id: 'corp-006',
      category: 'corporate',
      template: 'Our AI needed an emergency therapy session due to {technical_issue}',
      variables: ['technical_issue'],
      believabilityScore: 0.55
    }
  ],
  supernatural: [
    {
      id: 'super-001',
      category: 'supernatural',
      template: 'A {creature} was haunting my {appliance}',
      variables: ['creature', 'appliance'],
      believabilityScore: 0.1
    },
    {
      id: 'super-002',
      category: 'supernatural',
      template: 'Had to perform an emergency exorcism on my {possessed_item}',
      variables: ['possessed_item'],
      believabilityScore: 0.2
    },
    {
      id: 'super-003',
      category: 'supernatural',
      template: 'My {item} started predicting the future and needed recalibration',
      variables: ['item'],
      believabilityScore: 0.1
    },
    {
      id: 'super-004',
      category: 'supernatural',
      template: 'Got stuck in a time loop while making {food_item}',
      variables: ['food_item'],
      believabilityScore: 0.15
    }
  ],
  environmental: [
    {
      id: 'env-001',
      category: 'environmental',
      template: 'Unexpected {weather_phenomenon} in my {location}',
      variables: ['weather_phenomenon', 'location'],
      believabilityScore: 0.5
    },
    {
      id: 'env-002',
      category: 'environmental',
      template: 'My {plant} achieved sentience and needed emotional support',
      variables: ['plant'],
      believabilityScore: 0.1
    },
    {
      id: 'env-003',
      category: 'environmental',
      template: 'Local {weather_phenomenon} caused my {transport} to malfunction',
      variables: ['weather_phenomenon', 'transport'],
      believabilityScore: 0.6
    },
    {
      id: 'env-004',
      category: 'environmental',
      template: 'Had to rescue my {pet} from a freak {weather_phenomenon} incident',
      variables: ['pet', 'weather_phenomenon'],
      believabilityScore: 0.4
    }
  ],
  social: [
    {
      id: 'social-001',
      category: 'social',
      template: 'My {pet} went viral on {platform} and I had to manage their PR',
      variables: ['pet', 'platform'],
      believabilityScore: 0.3
    },
    {
      id: 'social-002',
      category: 'social',
      template: 'Got caught in an endless {social_activity} loop with my {relative}',
      variables: ['social_activity', 'relative'],
      believabilityScore: 0.4
    },
    {
      id: 'social-003',
      category: 'social',
      template: 'Had to help {celebrity} with their {hobby} emergency',
      variables: ['celebrity', 'hobby'],
      believabilityScore: 0.2
    },
    {
      id: 'social-004',
      category: 'social',
      template: 'My {relative} started a {platform} trend that needed immediate attention',
      variables: ['relative', 'platform'],
      believabilityScore: 0.35
    }
  ]
};

export const generateVariable = (type: string) => {
  const generator = generateVariables[type as keyof typeof generateVariables];
  return generator ? generator() : type;
};
