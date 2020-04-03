import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const RegPage = ({ children }) => {
  return (
    <Layout>
      <SEO title="Reg Page" />
      <section className="usa-section">
        <div className="grid-container">{children}</div>
      </section>
    </Layout>
  );
};

export default RegPage;
