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
      <Link className="project-flip" to={`/projects/${this.props.project.url}`}>
       <div className="project-container">
          <div className="project">
            <div className="topFlip">
              {this.props.project.title}
              <div className="fw-overlay">
                <img className="fw-logo" src={require(`../assets/images/${this.props.project.fwImg}`)} />
              </div>
            </div>
            <div className="bottomFlop">
              <div>
                <p>Find out more</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default Project
