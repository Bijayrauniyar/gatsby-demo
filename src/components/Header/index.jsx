import React from 'react';
import './index.scss';
import { Link } from 'gatsby-plugin-intl';

export default function header() {
  return (
    <>
      <header className="site-header js-site-header js-editable editable  js-fixed-nav">
        <nav className="nav-container">
          <div className="nav-title">
            <Link to='/'>
              Home
            </Link>
          </div>
          <div className="nav-title">
            <Link to="/press-release">Press Release</Link>
          </div>
          <div className="nav-title">
            <Link to='/support'>Support</Link>
          </div>
          <div className="nav-title">
            <a rel="noopener noreferrer" href="https://www.danfecreatives.com/about.html" target="_blank">
              About us
            </a>
          </div>
        </nav>
        <nav className="social nav-social">
          <ul>
            <li>
              <a rel="noopener noreferrer" href="https://twitter.com/danfebooks" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 30 24"
                  height="24px"
                  xmlSpace="preserve"
                  className="icon icon-twitter"
                >
                  <path d="M24.71 5.89C24 6.2 23.2 6.4 22.4 6.53c0.82-0.5 1.45-1.29 1.75-2.23c-0.77 0.46-1.62 0.8-2.53 1 C20.92 4.5 19.9 4 18.7 4c-2.2 0-3.99 1.81-3.99 4.04c0 0.3 0 0.6 0.1 0.92C11.54 8.8 8.6 7.2 6.6 4.7 C6.3 5.3 6.1 6 6.1 6.77c0 1.4 0.7 2.6 1.8 3.36c-0.65-0.02-1.27-0.2-1.81-0.51c0 0 0 0 0 0.1 c0 2 1.4 3.6 3.2 3.96c-0.34 0.09-0.69 0.14-1.05 0.14c-0.26 0-0.51-0.03-0.75-0.07c0.51 1.6 2 2.8 3.7 2.8 c-1.36 1.08-3.08 1.73-4.95 1.73c-0.32 0-0.64-0.02-0.95-0.06C7.05 19.3 9.1 20 11.4 20c7.33 0 11.34-6.15 11.34-11.49 c0-0.18 0-0.35-0.01-0.52C23.5 7.4 24.2 6.7 24.7 5.89z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/danfe-books"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 30 24"
                  height="24px"
                  xmlSpace="preserve"
                  className="icon icon-linkedin"
                >
                  <path d="M19.57 20v-5.78c0-1.45-0.5-2.44-1.74-2.44c-0.95 0-1.51 0.67-1.76 1.31c-0.09 0.23-0.11 0.55-0.11 0.88V20 h-3.43c0 0 0.05-9.78 0-10.8h3.43v1.53c-0.01 0.01-0.02 0.02-0.02 0.03h0.02v-0.03c0.46-0.73 1.27-1.79 3.09-1.79 c2.26 0 4 1.5 4 4.86V20H19.57z M8.92 7.73H8.89C7.74 7.7 7 6.9 7 5.86C7 4.8 7.8 4 8.9 4s1.9 0.8 1.9 1.9 C10.86 6.9 10.1 7.7 8.9 7.73z M10.63 20H7.2V9.2h3.43V20z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/danfebooks"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 30 24"
                  height="24px"
                  xmlSpace="preserve"
                  className="icon icon-facebook"
                >
                  <path d="M16.21 20h-3.26v-8h-1.63V9.24h1.63V7.59c0-2.25 0.92-3.59 3.53-3.59h2.17v2.76H17.3 c-1.02 0-1.08 0.39-1.08 1.11l0 1.38h2.46L18.38 12h-2.17V20z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
