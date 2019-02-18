/* eslint-disable */

// site-config.js:
// This is the sitewide information that is used throughout the entire
// build of the site. This goes from SEO to headings and also into the
// core Gatsby config files as well.

const path = require('path');

module.exports = {
  siteTitle: `Laxalt & McIver`,
  siteTitleShort: `lmnts-gatsby-starter`,
  siteDescription: `Lorem ipsum sit dit imet dolor elum.`,
  siteBaseKeywords: `design, graphic design`,
  siteUrl: `https://laxaltandmciver.co/`,
  themeColor: `LightBlue`,
  secondaryColor: `LightSalmon`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  logoLight: path.resolve(__dirname, 'src/images/icon.png'),
  logoDark: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: `laxaltandmciver`,
    facebook: `laxaltandmciver`,
    instagram: `laxaltandmciver`,
    fbAppId: `966242223397117`,
  },
};
