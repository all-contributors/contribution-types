/**
 * Which kind of repository page a contribution type links to, if any.
 */
export type ContributionLinkKind = 'commits' | 'issues' | 'reviews';

export interface ContributionType {
  /**
   * Human-readable description, such as `"Bug reports"`.
   */
  description: string;

  /**
   * Which kind of repository page the contribution type links to, if any.
   */
  link?: ContributionLinkKind;

  /**
   * Emoji representing the contribution type, such as `"🐛"`.
   */
  symbol: string;
}

/**
 * Repository hosts supported by All Contributors.
 */
export type RepoType = 'github' | 'gitlab';
