<p align="center">
  <a href="https://github.com/lmnts-dev/lmnts-gatsby-starter">
    <img
      src="https://cdn.dribbble.com/users/1826170/avatars/normal/56c47446d104c3768bbd90d907b1f238.jpg?1518642823"
      height="80"
      alt="lmnts-gatsby-starter"
      title="lmnts-gatsby-starter"
    />
  </a>
</p>

<p align="center">
  An <em>opinionated</em> Gatsby v2 starter with React Context, styled-components, page transitions, scroll events with <code>IntersectionObserver</code> and a focus on accessibility and SEO. Made for state-of-the-art marketing sites.
</p>

***

## Features

- [X] 🤩 Page Transitions, component-based (with no-js support)
- [X] 👮‍♂️ `IntersectionObserver`, component-based (with polyfill)
- [X] 🌿 React Context for global UI state, with SSR
- [X] 💅 [`styled-components`](https://www.styled-components.com/) v4
- [X] 💯 Optimized with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) (including test)
- [X] 🔥 Code Splitting of CSS and JS (component based)
- [X] 🔪 Inline SVG support
- [X] ⚙️ One config file for site-wide settings
- [X] 💙 Most social + meta tags in one component
- [X] 🖼 All favicons generated, only one icon file needed
- [X] 🌐 Offline support
- [X] 📄 Manifest support
- [X] 🗺 Sitemap support
- [X] 📱 Generated media queries for easy use
- [X] 😎 [Prettier](https://prettier.io/) for code style
- [X] 👷‍♂️ [CircleCI](https://circleci.com/) support
- [X] 🐙 Schema JSONLD
- [X] 🔎 [`size-plugin`](https://github.com/GoogleChromeLabs/size-plugin) to keep an eye on your bundle sizes
- [X] 👨‍🏫 ESLint (based on [`eslint-plugin-react`](./.eslintrc))

## Future Plans
- [] Typescript

Do you have suggestions or feedback? [Open an issue](https://github.com/fabe/gatsby-universal/issues/new)!

## Lighthouse scores (on [Netlify](https://netlify.com))

[![Lighthouse scores (on Netlify)](https://lighthouse.now.sh/?perf=100&pwa=100&a11y=100&bp=100&seo=100)](https://circleci.com/gh/fabe/gatsby-universal)

## Usage

```bash
# Installation with `gatsby-cli`
gatsby new client-site https://github.com/lmnts-dev/lmnts-gatsby-starter

# Installation with `git clone`
git clone client-site git@github.com:lmnts-dev/lmnts-gatsby-starter.git
cd client-site
yarn install

# To develop
npm run develop

# To build
npm run build

# To test SSR (for Lighthouse etc.)
npm run ssr

# To format JS (precommit)
npm run format

# To generate favicons (included in `build`)
npm run build:favicons
```

## Configuration

Find the site-wide configuration in `site-config.js`.

```js
module.exports = {
  siteTitle: `Laxalt & McIver Gatsby Starter`,
  siteTitleShort: `lmnts-gatsby-starter`,
  siteDescription: `An opinionated starter for Gatsby.`,
  siteUrl: `https://laxaltandmciver.co/`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/assets/images/icon.png'),
  social: {
    twitter: `gatsbyjs`,
    fbAppId: `966242223397117`,
  },
};
```

> 🚨 Don't forget to update your `robots.txt` inside `static/`!

## Folder structure
For further reading on methodolgy, keep sscrolling.

```bash
├── gatsby-browser.js # Specify how Gatsby renders pages in the browser
├── gatsby-config.js # Gatsby config, mostly taken from `site-config.js`
├── gatsby-node.js # Modify webpack config
├── gatsby-ssr.js # Specify how Gatsby builds pages
├── site-config.js # Global settings for the whole site, used by multiple scripts
├── content # Content & data, in both json and markdown
├── src
│   ├── assets
│   ├── components
│   ├── elements
│   ├── constants # Site-wide constants (breakpoints, colors, etc.)
│   ├── helpers
│   │   ├── SchemaGenerator.js # Generates JSON-LD schema.org snippets
│   │   └── MediaQueries.js # Creates media queries for styled-components
│   ├── pages
│   ├── store # Store and provider of a React.createContext instance
└── scripts
    ├── lighthouse.test.js # Tests the site specified inside `site-config.js` with Google Lighthouse (WIP)
    └── favicons.js # Generates favicons and manifest using one png only.
```

## Methodology
### Elements
Elements are static, logic-less building blocks.
```bash
├── src
│   ├── elements
│   │   ├── Block
│   │   ├── Inner
│   │   ├── Section
```

### Components
Components are collections of Elements and often contain logic.
```bash
├── src
│   ├── components
│   │   ├── core # <Head> tag, transitions, Layout, IntersectionObserver, SEO generation
│   │   ├── library # Various components needed for the site pages.
│   │   ├── sitewide # Visible sitewide components: Navigation, footer, etc.
```

### Building with these
We follow the guidelines below for typical generation and nesting of Elements:
```bash
<Section>
  <Inner>
    <Block>
      # Content Here
    </Block>
  </Inner>
</Section>
```

- `<Section>` : The wrapper of the elements. Uses the site's Base.js gutters. Always fullwidth.
- `<Inner>` : The inner part of the section. Only one of these exist at all times. Always `relative`, and also can be various widths if needed.
- `<Block>` : Various, repeatable elements. This is the core content container.

### Componentizing collections of Elements

<i>TODO: Pete will write this...</i>

## Author

* Peter Laxalt ([@peterlaxalt](https://dribbble.com/peterlaxalt)) - [Laxalt & McIver](https://laxaltandmciver.co)
