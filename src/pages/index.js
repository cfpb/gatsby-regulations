import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="usa-section">
      <div className="grid-container">
        <p>Welcome to Gatsby Regulations.</p>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
