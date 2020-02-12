import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import Helmet from 'react-helmet';
import Layout from '../layout';
import Footer from '../components/Footer/index'



function Heading() {
    return (
        <>
            <div className="masthead masthead-blog">
                <div className="masthead-contents">
                    <div className="masthead-text">
                        <h1 className="small">
                            24×7
                           <strong>Support</strong>
                        </h1>
                        <p className="sub-lead">
                            danfebooks
                           <sup>®</sup>
                            {' '}
                            customer support team is here to help. We are available 24×7.
                        </p>
                    </div>
                </div>
            </div>
            <div className="masthead-placeholder" />
        </>
    )
}



function ContactUs() {
    return (
        <>
            <div className="site-wrap">
                <div className="site-container">
                    <div className="site-content site-content-posts">
                        <article>
                            <h2>Contact us:</h2>
                            <p>Please contact us using the Live Chat during business hours. And in offline hours, we are available by phone, email, facebook and twitter.</p>
                            <p>
                                <a
                                    rel="noopener noreferrer"
                                    href="https://danfebooks.freshdesk.com/support/tickets/new"
                                    target="_blank"
                                    className="masthead-buttons masthead-button-appreciate masthead-button-appreciate-i"
                                >
                                    Create a Ticket
                                </a>
                            </p>
                            <div className="card">
                                <div className="card-block">
                                    <ul>
                                        <li>
                                            Phone:
                                               <a href="tel:+97714000099" title="Call us now">
                                                +977-01-4000099
                                               </a>
                                        </li>
                                        <li>
                                            Email:
                                                <a href="mailto:support@danfebooks.com">
                                                support@danfebooks.com
                                                </a>
                                        </li>
                                        <li>
                                            <iframe
                                                id="twitter-widget-0"
                                                scrolling="no"
                                                frameBorder="0"
                                                allowtransparency="true"
                                                allowFullScreen="true"
                                                className="twitter-mention-button twitter-mention-button-rendered twitter-tweet-button"
                                                style={{ position: 'static', visibility: 'visible', width: '144px', height: '20px' }}
                                                title="Twitter Tweet Button"
                                                src="https://platform.twitter.com/widgets/tweet_button.7303c29a8108bca4ac5c9ef008ed8164.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=https%3A%2F%2Fwww.danfebooks.com%2Fcustomer-support.html&amp;screen_name=danfebooks&amp;size=m&amp;time=1581495130236&amp;type=mention"
                                                data-screen-name="danfebooks"
                                            />
                                            <script async="" src="//platform.twitter.com/widgets.js" charset="utf-8" />
                                        </li>

                                        <li style={{ overflow: 'hidden' }}>
                                            <iframe
                                                title='fb'
                                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdanfebooks%2F&amp;tabs=timeline&amp;width=340&amp;height=127&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId"
                                                width="340"
                                                height="127"
                                                style={{ border: 'none', overflow: 'hidden' }}
                                                scrolling="no"
                                                frameBorder="0"
                                                allowtransparency="true"
                                            />
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}




const support = () => {
    const intl = useIntl();
    return (
        <Layout>
            <Helmet title={intl.formatMessage({ id: 'title' })} />
            <Heading />
            <ContactUs />
            <Footer />
        </Layout>
    );
};

export default support;
