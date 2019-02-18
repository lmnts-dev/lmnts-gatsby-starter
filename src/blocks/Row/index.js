// <Row> Component:
// This is the sitewide Row Style of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Styles
import RowStyle from 'blocks/Inner/styles.scss';

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
