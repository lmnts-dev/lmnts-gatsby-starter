// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Index = ({ data }) => (
  <Layout>
    <div>
      <h1>{Theme.Site.Title}</h1>
      <p>{Theme.Site.Description}</p>
    </div>
  </Layout>
);

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
