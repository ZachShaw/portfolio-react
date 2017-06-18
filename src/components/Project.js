import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import '../styles/components/Project.scss';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }
    
  render() {
    
    return (
      <Link to={`/projects/${this.props.project.url}`}>
        <li className="project">
          <h4>{this.props.project.title}</h4>
        </li>
      </Link>
    )
  }
}

export default Project