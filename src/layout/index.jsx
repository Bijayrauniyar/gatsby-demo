import React from 'react';
import Helmet from 'react-helmet';
import { injectIntl } from 'gatsby-plugin-intl';
// import { Container, Row } from 'react-bootstrap';
import config from '../../data/SiteConfig';
import Header from '../components/Header/index';
import './globalStyle/home.css';
import './globalStyle/site.css';







class MainLayout extends React.Component {
  render() {
    const { children, intl } = this.props;
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,400,700"
          rel="stylesheet"
        />
        <Header siteTitle={intl.formatMessage({ id: 'title' })} />

        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>

        {children}

      </>
    );
  }
}


export default injectIntl(MainLayout);
