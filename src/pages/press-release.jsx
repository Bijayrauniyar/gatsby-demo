/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import Helmet from 'react-helmet';
import Layout from '../layout';
import Footer from '../components/Footer/index'




function ContentPress() {
    return (
        <>
            <div className="site-wrap">
                <div className="site-container">
                    <div className="site-content site-content-press site-content-posts">
                        <div className='articles'>
                            <article>
                                <time dateTime="2019-03-10T23:50">March 10, 2019</time>
                                <h2>Enhanced customer support using Live Chat</h2>
                                <p>
                                    It is our great pleasure to announce the integration of the Live Chat system. We couldn't be more proud
                                                  to be able to help our loyal customers right when they need us.
                                </p>
                                <p>We are growing as a markets favourite service to manage employee payroll. </p>
                                <p>
                                    As we continue to grow on our path to becoming the market leader - we believe customer support number on
                                                  priority and shouldn't be in the backlog.
                                </p>
                                <p>
                                    Being able to answer your questions right from where you are and when you need us, this Live Chat system
                                                  will allow us to do exactly that.
                                </p>
                            </article>
                            <hr />
                            <article>
                                <time dateTime="2019-0152-10T15:00">Feb 15, 2019</time>
                                <h2>
                                    <a name="trademark">
                                        <span>danfe</span>
                                        books
                                        <sup>®</sup>
                                        {' '}
                                        Trademark Acquired!
                                    </a>
                                </h2>
                                <p>
                                    We have just received a confirmation from The Department of Industries, Nepal Government awarding us
                                    with the trademark for danfebooks®.
                                </p>
                                <p>We will be releasing a detailed statement in the following week.</p>
                            </article>


                            <hr />
                            <article>
                                <time dateTime="2017-07-23T01:28">July 23, 2017</time>
                                <h2><a name="bugandsecurityjuly">Bug fixes and security update released!</a></h2>
                                <p>
                                    This is our first patch release after many of you have requested for the better password meter when
                                     signing up. We have that in place now. When you sign up or change your password - you will get instant
                                     feedback on what's wrong and what's right.
                                </p>
                                <p>Our password minimum requirements are clearly shown when creating a password.</p>
                                <p>
                                    <strong>Blocking disposable emails</strong>
                                    , we have had huge amounts of signup using disposable email
                                    services. Hence we have disabled the access or signups using those email services. If you are a developer
                                    and wants to test out our application - please reach out to us for a staging environment access at
                                    humans@danfebooks.com
                                </p>
                            </article>

                            <hr />
                            <article>
                                <time dateTime="2017-07-10T11:12">July 10, 2017</time>
                                <h2>
                                    <a name="openbeta">
                                        danfebooks
                                        <sup>&reg;</sup>
                                        {' '}
                                        (1.0.b) - Open BETA release date announced!
                                    </a>
                                </h2>
                                <p>
                                    It's July 17, 2017! That's it people, stay tuned. We will be open to the public for a launch on Monday,
                                                                     July 17, 2017.
                                </p>
                            </article>




                        </div>
                        <aside className="press-list">
                            <ol className="app-steps app-steps-b">
                                <li className="title">
                                    <div className="slogan">Previous</div>
                                    <h2>Press Releases</h2>
                                </li>
                                <li>
                                    <a href="#trademark">danfebooks® Trademark Acquired!</a>
                                    <time dateTime="2019-0152-10T15:00">Feb 15, 2019</time>
                                </li>
                                <li>
                                    <a href="#bugandsecurityjuly">Bug fixes and security update released!</a>
                                    <time dateTime="2017-07-23T01:28">July 23, 2017</time>
                                </li>
                                <li>
                                    <a href="#wearelive">We are LIVE, danfebooks® (1.0.b) is released!</a>
                                    <time dateTime="2017-07-17T15:00">July 17, 2017</time>
                                </li>
                                <li>
                                    <a href="#openbeta">danfebooks® (1.0.b) - Open BETA release date announced!</a>
                                    <time dateTime="2017-07-10T11:12">July 10, 2017</time>
                                </li>
                                <li>
                                    <a href="#facebooktwitter">We are on Facebook and Twitter</a>
                                    <time dateTime="2017-02-07T00:00">Feb 7, 2017</time>
                                </li>
                            </ol>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}


function Heading() {
    return (
        <>
            <div className="masthead masthead-blog">
                <div className="masthead-contents">
                    <div className="masthead-text">
                        <h1 className="small">
                            Press
                           <strong>Release</strong>
                        </h1>
                        <p className="sub-lead">
                            Official announcements and news on our payroll automation app - danfebooks
                            <sup>®</sup>
                        </p>
                    </div>
                </div>
            </div>
            <div className="masthead-placeholder" />
        </>
    )
}

const support = () => {
    const intl = useIntl();
    return (
        <Layout>
            <Helmet title={intl.formatMessage({ id: 'title' })} />
            <Heading />
            <ContentPress />
            <Footer />
        </Layout>
    );
};

export default support;                                        