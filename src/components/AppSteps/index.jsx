import React from 'react';
import './index.scss';
import ImgAddEmp from '../../Image/promo/addemp.svg';
import ImgAttendance from '../../Image/promo/attendance.svg';
import ImgTaxandPay from '../../Image/promo/taxandpayslip.svg';

export default function appSteps() {
  return (
    <>
      <div className="masthead-placeholder" />
      <div className="site-container app-steps-wrap">
        <div className="app-steps app-steps-a">
          <div className="slogan">Begin by</div>
          <h2>Adding Employees</h2>
          <div className="app-steps-contents">
            <figure>
              <img src={ImgAddEmp} alt="Add employees illustation" />
            </figure>
            <p>
              When you setup your account, you will have to import or add all of
              your employee data.
            </p>
          </div>
        </div>
        <div className="app-steps app-steps-b">
          <div className="slogan">Only once</div>
          <h2>Integrate attendance</h2>
          <div className="app-steps-contents">
            <p>
              Your existing attendance system or our in-build feature can be
              enabled
            </p>
            <figure>
              <img src={ImgAttendance} alt="Add employees illustation" />
            </figure>
          </div>
        </div>
        <div className="app-steps app-steps-c">
          <div className="slogan">And let the machine</div>
          <h2>
            Auto generate
            <br />
            Payslips
          </h2>
          <div className="app-steps-contents">
            <figure>
              <img src={ImgTaxandPay} alt="Add employees illustation" />
            </figure>
            <p>
              Every month, on the day you choose - this app will generate all of
              your employees payslip with accurate tax calculation
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
