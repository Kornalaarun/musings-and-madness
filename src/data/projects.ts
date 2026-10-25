export type ProjectStatus = 'building' | 'shipped' | 'paused' | 'idea';

export interface Project {
  name: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    name: 'claude-learn',
    description: 'Personal learning assistant built on Claude Code. Adaptive tutor with persistent state, mastery probing, and daily reading emails.',
    status: 'shipped',
    tags: ['AI', 'learning', 'Claude'],
    url: 'https://github.com/kornalaarun/claude-learn',
  },
  {
    name: 'mad-titan',
    description: 'Thanos-inspired Chrome extension that snaps half your tabs out of existence. Because 50% of your tabs deserve to be dusted.',
    status: 'shipped',
    tags: ['Chrome', 'productivity'],
    url: 'https://github.com/kornalaarun/mad-titan',
  },
  {
    name: 'The World Has Stories',
    description: 'The stories behind what everyone believes - fables, true stories and trivia on YouTube and Instagram, where AI does the heavy lifting.',
    status: 'building',
    tags: ['AI', 'content', 'storytelling'],
    url: 'https://www.youtube.com/@world.has.stories',
  },
  {
    name: 'Lease Document Intelligence',
    description: 'Portal for extracting structured data and insights from lease agreements using document AI.',
    status: 'building',
    tags: ['AI', 'legal-tech', 'documents'],
  },
  {
    name: 'Dessert Map of Hyderabad',
    description: 'Mapping every dessert worth eating in Hyderabad. Every city deserves a serious dessert guide.',
    status: 'building',
    tags: ['maps', 'Hyderabad', 'food'],
  },
  {
    name: 'memory-system',
    description: 'Composite intelligence research targeting ARC-AGI-3. Exploring memory architectures and reasoning in AI systems.',
    status: 'building',
    tags: ['AI', 'research', 'ARC-AGI'],
  },
  {
    name: 'Bharat Ko Janiye Quiz',
    description: 'Rebuilt the Government of India\'s global quiz platform on AWS - Cognito, API Gateway, Lambdas, 10-question format.',
    status: 'shipped',
    tags: ['AWS', 'quiz', 'India'],
  },
  {
    name: 'Godown',
    description: 'B2B liquidation marketplace for industrial automation gear in India. Connecting surplus equipment to buyers.',
    status: 'paused',
    tags: ['marketplace', 'India', 'B2B'],
  },
];
