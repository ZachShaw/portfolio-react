// Make this a component
// onComponentWillMount() get location pathName
// require JSON and get the project from the id in pathname

import React from 'react'
import PropTypes from 'prop-types'
import './Projects.scss'
import ProjectsWrap from '../../../components/ProjectsWrap';

export const Projects = ({}) => (
  <div className="projects-container">
    <h2>PROJECTS</h2>
    <ProjectsWrap />
  </div>
)

export default Projects
