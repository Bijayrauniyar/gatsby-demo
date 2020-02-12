import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './About.scss';
import config from '../../../data/SiteConfig';
import UserLinks from '../UserLinks/UserLinks';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <Card>
          <div className='about-wrapper'>
            <Card.Img
              src={config.userAvatar}
              className='about-img'
              alt={config.userName}
            />
            <Card.Text>
              <p className='about-text md-body-1'>{config.userDescription}</p>
            </Card.Text>
            <UserLinks labeled config={config} />
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
