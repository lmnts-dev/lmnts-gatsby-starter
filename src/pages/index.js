import React from 'react';
import Layout from 'components/layout';
import IOExample from 'components/io/example';
import Modal from 'containers/modal';

const Index = ({ data }) => (
  <Layout>
    <div>
      <h1>Laxalt & McIver Gatsby Starter.</h1>
      <Modal>
        <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        />
      </Modal>
    </div>
    <IOExample />
  </Layout>
);

export default Index;
