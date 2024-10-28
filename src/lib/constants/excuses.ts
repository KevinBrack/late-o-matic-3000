import { ExcuseTemplate, ExcuseCategory } from '@/types';

export const EXCUSE_TEMPLATES: Record<ExcuseCategory, ExcuseTemplate[]> = {
  classic: [
    {
      id: 'classic-001',
      category: 'classic',
      template: 'My {pet} ate my {item}',
      variables: ['pet', 'item'],
      believabilityScore: 0.4,
    },
    {
      id: 'classic-002',
      category: 'classic',
      template: 'Got stuck in {unexpected} traffic because of a {event}',
      variables: ['unexpected', 'event'],
      believabilityScore: 0.7,
    },
  ],
  'sci-fi': [
    {
      id: 'scifi-001',
      category: 'sci-fi',
      template: 'Had to prevent a temporal paradox in the {location} timeline',
      variables: ['location'],
      believabilityScore: 0.1,
    },
    {
      id: 'scifi-002',
      category: 'sci-fi',
      template: 'My {device} created a quantum entanglement with my {item}',
      variables: ['device', 'item'],
      believabilityScore: 0.2,
    },
  ],
  corporate: [
    {
      id: 'corp-001',
      category: 'corporate',
      template: 'The {system} servers were experiencing {technical_issue}',
      variables: ['system', 'technical_issue'],
      believabilityScore: 0.8,
    },
    {
      id: 'corp-002',
      category: 'corporate',
      template: 'Blockchain consensus issues with the {department} {protocol}',
      variables: ['department', 'protocol'],
      believabilityScore: 0.6,
    },
  ],
  supernatural: [
    {
      id: 'super-001',
      category: 'supernatural',
      template: 'A {creature} was haunting my {appliance}',
      variables: ['creature', 'appliance'],
      believabilityScore: 0.1,
    },
    {
      id: 'super-002',
      category: 'supernatural',
      template: 'Had to perform an emergency exorcism on my {possessed_item}',
      variables: ['possessed_item'],
      believabilityScore: 0.2,
    },
  ],
  environmental: [
    {
      id: 'env-001',
      category: 'environmental',
      template: 'Unexpected {weather_phenomenon} in my {location}',
      variables: ['weather_phenomenon', 'location'],
      believabilityScore: 0.5,
    },
    {
      id: 'env-002',
      category: 'environmental',
      template: 'My {plant} achieved sentience and needed emotional support',
      variables: ['plant'],
      believabilityScore: 0.1,
    },
  ],
  social: [
    {
      id: 'social-001',
      category: 'social',
      template: 'My {pet} went viral on {platform} and I had to manage their PR',
      variables: ['pet', 'platform'],
      believabilityScore: 0.3,
    },
    {
      id: 'social-002',
      category: 'social',
      template: 'Got caught in an endless {social_activity} loop with my {relative}',
      variables: ['social_activity', 'relative'],
      believabilityScore: 0.4,
    },
  ],
};
