declare module 'all-contributors-cli/dist/util/contribution-types.js' {
  interface UpstreamContributionType {
    description: string;
    link?: string;
    symbol: string;
  }

  export function contributionTypes(options: {
    repoType: string;
  }): Record<string, UpstreamContributionType>;
}
