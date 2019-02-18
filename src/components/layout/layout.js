// Layout Component:
// This is the sitewide wrapper of all the content on the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Vendor
import { StaticQuery, graphql } from 'gatsby';

//  Blocks
import Head from 'components/head';
import Header from 'components/header';

// Styles
import GlobalStyle from 'constants/styles/GlobalStyles.scss.js';
import SiteGrid from 'components/layout/layout.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Layout = ({ data, children }) => (
  <SiteGrid>
    <GlobalStyle />
    <Head />
    <SiteGrid.Inner>
      <Header title={data.site.siteMetadata.siteTitle} />
      {children}
    </SiteGrid.Inner>
  </SiteGrid>
);

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

export default LayoutWithQuery;

//////////////////////////////////////////////////////////////////////
// End Component
