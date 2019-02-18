// Layout Component:
// This is the sitewide wrapper of all the content on the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Vendor
import { StaticQuery, graphql } from 'gatsby';

//  Components
import Head from 'components/core/Head';
import Navigation from 'components/sitewide/Navigation';
import Footer from 'components/sitewide/Footer';

// Styles
import GlobalStyle from 'constants/styles/GlobalStyles.scss.js';
import SiteGrid from 'components/core/Layout/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Layout = ({ data, children, FlexDir }) => (
  <SiteGrid>
    <GlobalStyle />
    <Head />
    <Navigation />
    <SiteGrid.Inner>{children}</SiteGrid.Inner>
    <Footer />
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
