import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import './ProjectSingle.scss'

const mapStateToProps = (state) => ({
   pathname: state.location.pathname
})

class ProjectSingle extends React.Component {
  constructor(props) {
    super(props);
    var projects = require('../../../assets/json/projects.json');
    this.state = {
      projects
    };
  }

  componentWillMount() {
    this.currentProject = this.state.projects.find(project => project.url === this.props.params.url)
  }

  render() {
    return (
      <div className="project-single">
        <Link to="/projects">
          <img className="back" src={require(`../../../assets/images/arrow-left.svg`)} />
        </Link>
        <h2 style={{ marginBottom: '30px'}} className="headerFadeIn">{this.currentProject.title}</h2>
        <img className="image" src={require(`../../../assets/images/${this.currentProject.imgUrl}`)}></img>
        <p>{this.currentProject.description}</p>
        <div className="frameworks">
          {
            this.currentProject.framework.map((framework) => {
              return (
                <div className="framework-single" key={this.currentProject.framework.indexOf(framework)}>
                  <span>{framework}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(ProjectSingle)
