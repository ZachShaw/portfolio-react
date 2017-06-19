import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import '../styles/components/Project.scss';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  framework() {
    if (this.props.project.framework.includes('React')) {
      return <img className="fw-logo" src={require(`../assets/images/react.svg`)} />
    } else if (this.props.project.framework.includes('AngularJS 1.5') || this.props.project.framework.includes('AngularJS 1.6')) {
      return <img className="fw-logo" src={require(`../assets/images/angular.png`)} />
    }
  }
    
  render() {
    
    return (
      <Link to={`/projects/${this.props.project.url}`}>
        <li className="project">
          <h6>{this.props.project.title}</h6>
          <div>
            {this.framework()}
          </div>
        </li>
      </Link>
    )
  }
}

export default Project