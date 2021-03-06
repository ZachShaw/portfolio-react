import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { Link, IndexLink } from 'react-router';

export const HomeView = () => (
  <div className="home-container">
    <div style={{ width: '100%' }}>
      <h1>Zach Shaw</h1>
      <h4>Front End Engineer</h4>
      <div className="location">
        <img className="back" src={require(`../../../assets/images/location.svg`)} /><h5>London</h5>
      </div>
      <p>React, AngularJS, Redux, JavaScript (ES6/ES7), REST, webpack2, Sass, Less, Stylus, yarn, npm, webpack, pug, mocha, jQuery, AWS, Heroku, Bitbucket Pipelines, Semaphore CI, Google Analytics, JIRA, Confluence, Material</p>
      <div className="btn-container">
        <Link to="/projects"><div className="btn">Projects</div></Link>
        <Link to="/experience"><div className="btn">Experience</div></Link>
        <Link to="/contact"><div className="btn">Contact</div></Link>
      </div>
    </div>
  </div>
)

export default HomeView
