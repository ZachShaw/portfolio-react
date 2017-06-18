import React, { Component } from 'react';
import { connect } from 'react-redux'

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
      <div>
        <h1>Project Single!!</h1>
        <h3>{this.currentProject.url}</h3>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(ProjectSingle)