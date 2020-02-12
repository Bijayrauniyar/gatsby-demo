import React from 'react';
import './index.scss';

export default function hero() {
  return (
    <>
      <div className="masthead js-masthead-fixed">
        <div className="masthead-contents">
          <div className="masthead-text js-masthead-text">
            <h1>
              danfe
              <strong>books</strong>
              <sup>®</sup>
            </h1>
            <p>Payroll simplified and automated!</p>
            <p className="sub-lead">
              Add your employee details, attendance records and choose a date to
              generate payroll monthly. You're all set.
            </p>
            <p className="sub-lead">
              <a
                href="https://app.danfebooks.com/signup?utm_source=DanfeBooks&amp;utm_medium=LandingButton"
                target="_new"
                className="masthead-buttons masthead-button-appreciate"
              >
                Get started free
              </a>
              Or
              <a
                href="https://app.danfebooks.com/login?utm_source=DanfeBooks&amp;utm_medium=LandingButton"
                target="_new"
                className="masthead-buttons-link"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
