import React, { Component } from 'react'
import ProjContainer from './ProjContainer'
import activityImg from '../images/activity_generator.png'

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
      counter: 0
    };
  }
  back = () => {
    if (this.state.counter > 0) {

      this.setState({ counter: this.state.counter - 1 })
    }
    else {
      this.setState({ counter: this.projects.length - 1 })
    }
  }
  forward = () => {
    if (this.state.counter < this.projects.length - 1) {

      this.setState({ counter: this.state.counter + 1 })
    }
    else {
      this.setState({ counter: 0 })
    }
  }
  projects =
    [{
      title: "Activity Generator",
      img: activityImg,
      tools: "React, REST API",
      description: "A simple activity generator that uses the bored API.",
      url: "https://crisarchero.github.io/activityGenerator/",
      code: "https://github.com/Crisarchero/activityGenerator",
    },
    {
      title: "Activity Generator2",
      img: activityImg,
      tools: "React, REST API",
      description: "A simple activity generator that uses the bored API.",
      url: "https://crisarchero.github.io/activityGenerator/",
      code: "https://github.com/Crisarchero/activityGenerator",
    },
    {
      title: "Activity Generator3",
      img: activityImg,
      tools: "React, REST API",
      description: "A simple activity generator that uses the bored API.",
      url: "https://crisarchero.github.io/activityGenerator/",
      code: "https://github.com/Crisarchero/activityGenerator",
    },
    {
      title: "Activity Generator4",
      img: activityImg,
      tools: "React, REST API",
      description: "A simple activity generator that uses the bored API.",
      url: "https://crisarchero.github.io/activityGenerator/",
      code: "https://github.com/Crisarchero/activityGenerator",
    }

    ]
  render() {
    return (
      <div id="projects" className="p-5">
        <h2>Projects</h2>
        <button className="btn btn-secondary" onClick={() => { this.setState({ showAll: !this.state.showAll }) }}> {this.state.showAll ? "Carousel" : "View All"}</button>

        {this.state.showAll ?
          
          <div className = "d-flex flex-column" >
            <ProjContainer project = {this.projects[0]}/>
            <ProjContainer project = {this.projects[1]}/>
            <ProjContainer project = {this.projects[2]}/>
            <ProjContainer project = {this.projects[3]}/>
          </div>

          :

          <div className="d-flex align-items-center">
            <button className="btn" onClick={this.back}>&lt;</button>
            <ProjContainer project={this.projects[this.state.counter]} />
            <button className="btn" onClick={this.forward}>&gt;</button>
          </div>
        }



      </div>
    )
  }
}
