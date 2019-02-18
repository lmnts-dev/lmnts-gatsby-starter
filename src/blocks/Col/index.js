// <Col> Component:
// This is the sitewide column style of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Styles
import ColStyle from 'blocks/Col/styles.scss';

const Col = ({ children, FullWidth }) => <ColStyle>{children}</ColStyle>;

export default Col;
