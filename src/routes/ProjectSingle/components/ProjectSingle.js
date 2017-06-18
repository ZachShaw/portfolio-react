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
      width: "100px",
      color: "#fff",
      fontSize: "12px"
    }

    let projectSingle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }

    return (
      <div style={projectSingle}>
        <div style={image}></div>
        <h1>{this.currentProject.title}</h1>
        <p>{this.currentProject.description}</p>
        <div style={frameworks}>
          {
            this.currentProject.framework.map((framework) => {
              return (
                <div style={frameworkSingle} key={this.currentProject.framework.indexOf(framework)}>
                  {framework}
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