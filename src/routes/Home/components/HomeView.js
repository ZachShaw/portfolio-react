import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div className="home-container">
    <h1>Zach Shaw</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className="btn-container">
      <button>Projects</button>
      <button>About</button>
      <button>Contact</button>
    </div>
    
  </div>
)

export default HomeView
