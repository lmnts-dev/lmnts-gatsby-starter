// This creates the media templates, which allows for simple
// breakpoint usage inside styled-components, e.g.:
//
// ${Media.Lg`
//   font-size: 1.6rem;
// `};
//
// ${Media.Min_Md`
//   display: flex;
// `};
//
// Edit or add breakpoints inside constants/Theme.js

import { css } from 'styled-components';
import * as lm from '../constants/Theme';

const Media = Object.keys(Theme.Base.Media).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${Theme.Base.Media[label] / 16}em) {
      ${css(...args)};
    }
  `;

  acc[`Min_${label}`] = (...args) => css`
    @media (min-width: ${Theme.Base.Media[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default Media;
