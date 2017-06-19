import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { Link, IndexLink } from 'react-router';

export const HomeView = () => (
  <div className="home-container">
    <div style={{ width: '100%' }}>
      <h1>Zach Shaw</h1>
      <h4>Front End Engineer</h4>
      <p>Stack: React, AngularJS, Redux, Javascript (ES6), jQuery, webpack, gulp, grunt, Sass, Less, Stylus, yarn, bower, npm, webpack, Chai, AWS, Semaphore CI, Google Analytics, JIRA, Confluence, Material UI, Bootstrap</p>
      {/*<div className="btn-container">
        <Link to="/projects"><button>Projects</button></Link>
        <Link to="/about"><button>Experience</button></Link>
        <button>Contact</button>
      </div> */}
    </div>  
  </div>
)

export default HomeView
