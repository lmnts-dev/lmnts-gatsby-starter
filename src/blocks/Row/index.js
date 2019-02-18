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

const Row = ({
  children,
  FullWidth,
  JustifyContent,
  FlexDir,
  AlignItems,
  Background,
  PaddingLeft,
  PaddingRight,
  PaddingTop,
  PaddingBottom,
  TextColor,
  MinHeight,
}) => (
  <RowStyle
    FullWidth={FullWidth}
    JustifyContent={JustifyContent}
    FlexDir={FlexDir}
    AlignItems={AlignItems}
    Background={Background}
    PaddingLeft={PaddingLeft}
    PaddingRight={PaddingRight}
    PaddingTop={PaddingTop}
    PaddingBottom={PaddingBottom}
    TextColor={TextColor}
    MinHeight={MinHeight}
  >
    {children}
  </RowStyle>
);

export default Row;

//////////////////////////////////////////////////////////////////////
// End Block
