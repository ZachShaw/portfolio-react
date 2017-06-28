import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { Link, IndexLink } from 'react-router';

export const HomeView = () => (
  <div className="home-container">
    <div style={{ width: '100%' }}>
      <h1>Zach Shaw</h1>
      <h4>Front End Engineer</h4>
      <p>Stack: React, AngularJS, Redux, Javascript (ES6), jQuery, REST, webpack, gulp, grunt, Sass, Less, Stylus, yarn, bower, npm, webpack, pug, Chai, AWS, Semaphore CI, Google Analytics, JIRA, Confluence, Material UI, Bootstrap</p>
      <div className="btn-container">
        <Link to="/projects"><div className="btn">Projects</div></Link>
        <Link to="/about"><div className="btn">Experience</div></Link>
        <Link to="/contact"><div className="btn">Contact</div></Link>
      </div>
    </div>
  </div>
)

export default HomeView
