import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div className="home-container">
    <h1>Zach Shaw</h1>
    <h2>Web Developer</h2>
    <h3>Stack</h3>
    <p> React, AngularJS, Redux, Javascript (ES6), jQuery, webpack, gulp, grunt, Sass, Less, Stylus, yarn, bower, npm, webpack, Chai, AWS, Semaphore CI, Google Analytics, JIRA, Confluence, Material UI, Bootstrap</p>
    <div className="btn-container">
      <button>Projects</button>
      <button>About</button>
      <button>Contact</button>
    </div>
    
  </div>
)

export default HomeView
