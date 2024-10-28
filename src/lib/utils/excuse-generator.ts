// Utility functions for generating excuses with variable substitution

const variableReplacements: Record<string, string[]> = {
  pet: ['dog', 'cat', 'hamster', 'goldfish', 'quantum pet'],
  item: ['homework', 'keys', 'phone', 'coffee', 'consciousness'],
  location: ['kitchen', 'bedroom', 'parallel universe', 'quantum realm', 'metaverse'],
  device: ['smartphone', 'laptop', 'quantum computer', 'toaster', 'time machine'],
  system: ['cloud', 'blockchain', 'neural network', 'coffee machine', 'quantum mainframe'],
  technical_issue: ['buffer overflow', 'quantum entanglement', 'cosmic ray interference', 'temporal anomaly'],
  creature: ['ghost', 'AI', 'interdimensional being', 'quantum fluctuation'],
  appliance: ['refrigerator', 'microwave', 'quantum toaster', 'coffee maker'],
  weather_phenomenon: ['localized time dilation', 'quantum storm', 'probability wave collapse'],
  plant: ['succulent', 'bonsai tree', 'quantum fungus', 'venus flytrap'],
  platform: ['TikTok', 'Instagram', 'Quantum Social', 'MetaVerse'],
  social_activity: ['meme review', 'quantum meditation', 'virtual reality meeting'],
  relative: ['quantum clone', 'parallel universe self', 'future me', 'past self'],
  department: ['quantum initiatives', 'temporal affairs', 'multiverse relations'],
  protocol: ['synchronization', 'quantum handshake', 'temporal alignment'],
  possessed_item: ['coffee machine', 'keyboard', 'quantum calculator', 'rubber duck'],
  unexpected: ['quantum', 'temporal', 'interdimensional', 'metaphysical'],
  event: ['space-time anomaly', 'quantum parade', 'timeline convergence']
};

export function replaceVariables(template: string): string {
  return template.replace(/{(\w+)}/g, (match, variable) => {
    const replacements = variableReplacements[variable];
    if (!replacements) return match;
    return replacements[Math.floor(Math.random() * replacements.length)];
  });
}

export function calculateBelievability(excuse: string): number {
  // More quantum/technical words = less believable
  const quantumWords = (excuse.match(/quantum|temporal|parallel|dimension/gi) || []).length;
  const baseScore = 0.7;
  return Math.max(0.1, Math.min(0.9, baseScore - (quantumWords * 0.15)));
}
