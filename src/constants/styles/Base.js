/* eslint-disable */

// Base.js:
// This is the sitewide base number variables.

export const Base = {
  Size: 60, // px
  Radius: 10, // px
  SiteWidth: 3200, // px
  FontSize: 14, // px
  Transition: 0.25, // seconds
  PageTransition: 250, // milliseconds

  // Responsive Breakpoints
  Media: {
    Lg: 992, // px
    Md: 768, // px
    Sm: 376, // px
  },

  // Site Grid
  Grid: {
    Nav: {
      Orientation: `top`,
      Fixed: false,
      LogoPosition: null,
      Size: {
        Lg: 55, // px
        Md: 150, // px
        Sm: 40, // px
      },
    },
    Gutter: {
      Top: 0, // px
      Bottom: 0, // px
      Right: 50, // px
      Left: 50, // px
    },
  },
};
