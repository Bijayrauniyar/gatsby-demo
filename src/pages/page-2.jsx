import React from 'react';
import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl';
import Helmet from 'react-helmet';
import Layout from '../layout';
// import SEO from '../components/SEO/SEO';

const SecondPage = ({ intl }) => (
  <Layout>
    {/* <SEO lang={intl.locale} title={intl.formatMessage({ id: 'title_page2' })} /> */}
    <Helmet title={intl.formatMessage({ id: 'title_page2' })} />
    <h1>
      <FormattedMessage id='hello_page2' />
    </h1>
    <p>
      <FormattedMessage id='welcome_page2' />
    </p>
    <Link to='/'>{intl.formatMessage({ id: 'go_back' })}</Link>
  </Layout>
);

export default injectIntl(SecondPage);
