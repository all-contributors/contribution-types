<h1 align="center">All Contributors: Contribution Types</h1>

<p align="center">
	The contribution types supported by All Contributors, as data.
	🔣
</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 3" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-3-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://codecov.io/gh/all-contributors/contribution-types" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JoshuaKGoldberg/all-contributors-types?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/all-contributors/contribution-types/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg" /></a>
	<a href="http://npmjs.com/package/all-contributors-types" target="_blank"><img alt="📦 npm version" src="https://img.shields.io/npm/v/all-contributors-types?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
</p>

## Usage

```shell
npm i all-contributors-types
```

```ts
import {
  contributionTypes,
  createContributionLink,
  isContributionTypeName,
} from 'all-contributors-types';

contributionTypes.bug;
// { description: "Bug reports", link: "issues", symbol: "🐛" }

createContributionLink('bug', {
  login: 'JoshuaKGoldberg',
  projectName: 'contribution-types',
  projectOwner: 'all-contributors',
});
// "https://github.com/all-contributors/contribution-types/issues?q=author%3AJoshuaKGoldberg"

isContributionTypeName('bug'); // true
isContributionTypeName('other'); // false
```

The data and links are kept in sync with [`@all-contributors/cli`](https://github.com/all-contributors/cli)'s [emoji key](https://allcontributors.org/docs/en/emoji-key).

### `contributionTypes`

Each contribution type, keyed by name, with:

- `description`: human-readable description, such as `"Bug reports"`
- `link` _(optional)_: which kind of repository page it links to: `"commits"`, `"issues"`, or `"reviews"`
- `symbol`: emoji, such as `"🐛"`

The `ContributionTypeName` type is a union of all contribution type names.

### `createContributionLink`

Creates the URL a contribution links to in an All Contributors README table, the same as `all-contributors generate`.
Contribution types without a `link` get a `#type-login` anchor.

Options:

- `login` _(optional)_: username of the contributor
- `projectName`: name of the repository
- `projectOwner`: owner of the repository
- `repoHost` _(optional)_: base URL of the repository host, if not the default for `repoType`
- `repoType` _(optional)_: `"github"` _(default)_ or `"gitlab"`

### `isContributionTypeName`

Type guard for whether a string is a known `ContributionTypeName`.

## Why?

[all-contributors/cli#295 Expose contribution-types in separate package](https://www.npmjs.com/package/all-contributors-types) tracks a first-party package exposing these utilities and types.
In the meantime, this package approximates what all-contributors does.

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 🔣

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://blog.jmadge.com"><img src="https://avatars.githubusercontent.com/u/23616154?v=4&size=100" width="100px" height="100px" alt="Jim Madge"/><br /><sub><b>Jim Madge</b></sub></a><br /><a href="#maintenance-jimmadge" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4&size=100" width="100px" height="100px" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/all-contributors/contribution-types/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="https://github.com/all-contributors/contribution-types/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/michaelfaith"><img src="https://avatars.githubusercontent.com/u/8071845?v=4&size=100" width="100px" height="100px" alt="michael faith"/><br /><sub><b>michael faith</b></sub></a><br /><a href="#maintenance-michaelfaith" title="Maintenance">🚧</a> <a href="#tool-michaelfaith" title="Tools">🔧</a> <a href="#ideas-michaelfaith" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/all-contributors/contribution-types/commits?author=michaelfaith" title="Documentation">📖</a> <a href="#infra-michaelfaith" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/all-contributors/contribution-types/commits?author=michaelfaith" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->
