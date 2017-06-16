import React, { Component } from 'react';
import '../styles/components/ProjectsWrap.scss';
import Project from './Project'

class ProjectsWrap extends React.Component {
  constructor(props) {
    super(props);
    var projects = require('../assets/json/projects.json');
    this.state = {
      projects
    };
  }

  componentWillMount() {
  }
    
  render() {
    
    return (
      <ul className="projects-wrapper">
      {
        this.state.projects.map((p) => {
          return <Project key={p.key} project={p}/>
        })
      }
    </ul>
    )
  }
}

export default ProjectsWrap