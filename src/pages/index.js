import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import RegList from '../components/reg-list';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="usa-section">
        <div className="grid-container">
          <p>Welcome to Gatsby Regulations.</p>
          <RegList data={data.regulations} />
        </div>
      </section>
    </Layout>
  );
};

// query the full list of regulations
export const query = graphql`
  query {
    regulations {
      regulations {
        regulation {
          title
          shortName
          partNumber
        }
      }
    }
  }
`;

export default IndexPage;
