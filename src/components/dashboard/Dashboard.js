import React, {Component} from 'react'

import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const projects = this.props.projects;
    console.log(projects);
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offser-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

//Reduxの用意されたメソッド
const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard)
