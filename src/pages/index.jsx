import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import Helmet from 'react-helmet';
import Layout from '../layout';
import Hero from '../components/Hero/index';
import AppSteps from '../components/AppSteps/index';
import Footer from '../components/Footer/index'
import BlockQuote from '../components/BlockQuote/index'

const IndexPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <Helmet title={intl.formatMessage({ id: 'title' })} />
      <Hero />
      <AppSteps />
      <Footer>
        <BlockQuote />
      </Footer>
    </Layout>
  );
};

export default IndexPage;
