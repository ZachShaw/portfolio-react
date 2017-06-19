import React, { Component } from 'react';
import { connect } from 'react-redux'
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
    let image = {
      height: "300px",
      width: "500px",
      backgroundColor: "rgba(255, 255, 255, 0.8)"
    }

    let frameworks = {
      display: "flex",
      justifyContent: "space-around",
    }

    let frameworkSingle = {
      border: "1px solid #fff",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "120px",
      color: "#fff",
      fontSize: "12px",
      margin: '0 10px'
    }

    let projectSingle = {
      height: '80vh',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around"
    }

    return (
      <div style={projectSingle}>
        <div style={image}></div>
        <h3>{this.currentProject.title}</h3>
        <p>{this.currentProject.description}</p>
        <div style={frameworks}>
          {
            this.currentProject.framework.map((framework) => {
              return (
                <div style={frameworkSingle} key={this.currentProject.framework.indexOf(framework)}>
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