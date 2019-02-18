// <Row> Component:
// This is the sitewide Row Style of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Styles
import { RowStyle } from 'blocks/Row/styles.scss';

// Begin Block
//////////////////////////////////////////////////////////////////////

const Row = ({ children, FullWidth, Justify, FlexDir, AlignItems }) => (
  <RowStyle
    FullWidth={FullWidth}
    Justify={Justify}
    FlexDir={FlexDir}
    AlignItems={AlignItems}
  >
    {children}
  </RowStyle>
);

export default Row;

//////////////////////////////////////////////////////////////////////
// End Block
