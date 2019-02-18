// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';

// Blocks
import Row from 'blocks/Row';
// import Inner from 'blocks/Inner';
// import Col from 'blocks/Col';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Index = ({ data }) => (
  <Layout>
    <Row
      FlexDir="column"
      Background={Theme.Color.Success}
      PaddingTop={Theme.Base.Size}
      PaddingBottom={Theme.Base.Size}
      MinHeight='40vh'
      JustifyContent='center'
      TextColor={Theme.Color.Black}
    >
      <h1>Contact</h1>
      <p>{Theme.Site.Description}</p>
    </Row>
  </Layout>
);

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
