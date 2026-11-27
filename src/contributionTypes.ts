import type { ContributionType } from './types.ts';

export type ContributionTypeName =
  | 'a11y'
  | 'audio'
  | 'blog'
  | 'bug'
  | 'business'
  | 'code'
  | 'content'
  | 'data'
  | 'design'
  | 'doc'
  | 'eventOrganizing'
  | 'example'
  | 'financial'
  | 'fundingFinding'
  | 'ideas'
  | 'infra'
  | 'maintenance'
  | 'mentoring'
  | 'platform'
  | 'plugin'
  | 'projectManagement'
  | 'promotion'
  | 'question'
  | 'research'
  | 'review'
  | 'security'
  | 'talk'
  | 'test'
  | 'tool'
  | 'translation'
  | 'tutorial'
  | 'userTesting'
  | 'video';

/**
 * The contribution types supported by All Contributors, keyed by name.
 * @see https://allcontributors.org/docs/en/emoji-key
 */
export const contributionTypes: Readonly<Record<ContributionTypeName, ContributionType>> = {
  a11y: {
    description: 'Accessibility',
    symbol: '️️️️♿️',
  },
  audio: {
    description: 'Audio',
    symbol: '🔊',
  },
  blog: {
    description: 'Blogposts',
    symbol: '📝',
  },
  bug: {
    description: 'Bug reports',
    link: 'issues',
    symbol: '🐛',
  },
  business: {
    description: 'Business development',
    symbol: '💼',
  },
  code: {
    description: 'Code',
    link: 'commits',
    symbol: '💻',
  },
  content: {
    description: 'Content',
    symbol: '🖋',
  },
  data: {
    description: 'Data',
    symbol: '🔣',
  },
  design: {
    description: 'Design',
    symbol: '🎨',
  },
  doc: {
    description: 'Documentation',
    link: 'commits',
    symbol: '📖',
  },
  eventOrganizing: {
    description: 'Event Organizing',
    symbol: '📋',
  },
  example: {
    description: 'Examples',
    symbol: '💡',
  },
  financial: {
    description: 'Financial',
    symbol: '💵',
  },
  fundingFinding: {
    description: 'Funding Finding',
    symbol: '🔍',
  },
  ideas: {
    description: 'Ideas, Planning, & Feedback',
    symbol: '🤔',
  },
  infra: {
    description: 'Infrastructure (Hosting, Build-Tools, etc)',
    symbol: '🚇',
  },
  maintenance: {
    description: 'Maintenance',
    symbol: '🚧',
  },
  mentoring: {
    description: 'Mentoring',
    symbol: '🧑‍🏫',
  },
  platform: {
    description: 'Packaging/porting to new platform',
    symbol: '📦',
  },
  plugin: {
    description: 'Plugin/utility libraries',
    symbol: '🔌',
  },
  projectManagement: {
    description: 'Project Management',
    symbol: '📆',
  },
  promotion: {
    description: 'Promotion',
    symbol: '📣',
  },
  question: {
    description: 'Answering Questions',
    symbol: '💬',
  },
  research: {
    description: 'Research',
    symbol: '🔬',
  },
  review: {
    description: 'Reviewed Pull Requests',
    link: 'reviews',
    symbol: '👀',
  },
  security: {
    description: 'Security',
    symbol: '🛡️',
  },
  talk: {
    description: 'Talks',
    symbol: '📢',
  },
  test: {
    description: 'Tests',
    link: 'commits',
    symbol: '⚠️',
  },
  tool: {
    description: 'Tools',
    symbol: '🔧',
  },
  translation: {
    description: 'Translation',
    symbol: '🌍',
  },
  tutorial: {
    description: 'Tutorials',
    symbol: '✅',
  },
  userTesting: {
    description: 'User Testing',
    symbol: '📓',
  },
  video: {
    description: 'Videos',
    symbol: '📹',
  },
};
