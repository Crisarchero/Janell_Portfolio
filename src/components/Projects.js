import React, { Component } from 'react'
import ProjContainer from './ProjContainer'
import activityImg from '../images/activity_generator.png'
import mynotesimg from '../images/mynotes.png'
import ourSong from '../images/our_song.png'

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
      title: "MyNotes",
      img: mynotesimg,
      tools: "MERN stack",
      description: "A fullstack, digital notebook that uses the MERN stack. Includes basic authentication and tokens. Use 'guest' with the password 'easypassword' to test.",
      url: "https://main--mynotebooksapp.netlify.app/login",
      code: "https://github.com/Crisarchero/online-notebook",
    },
    {
      title: "OurSong",
      img: ourSong,
      tools: "React, Bootstrap, SCSS, HTML/CSS",
      description: "A landing page for a fictional music store.  None of the links actually work, it's just a landing page.",
      url: "https://crisarchero.github.io/our-song/",
      code: "https://github.com/Crisarchero/our-song",
    },
    {
      title: "Activity Generator",
      img: activityImg,
      tools: "React, REST API",
      description: "A simple activity generator that uses the Bored API.",
      url: "https://crisarchero.github.io/activityGenerator/",
      code: "https://github.com/Crisarchero/activityGenerator",
    },
  

    ]
  render() {
    return (
      <div id="projects" className="p-5">
        <h2>Projects</h2>
        <button className="btn btn-secondary" onClick={() => { this.setState({ showAll: !this.state.showAll }) }}> {this.state.showAll ? "Collapse" : "Expand"}</button>

        {this.state.showAll ?

          <div className="d-flex flex-column" >
            <ProjContainer project={this.projects[0]} />
            <ProjContainer project={this.projects[1]} />
            <ProjContainer project={this.projects[2]} />
          </div>

          :

          <div id="project-carousel" className="d-flex align-items-center">
            <button className="btn flex-shrink-1" onClick={this.back}>&lt;</button>
            <ProjContainer project={this.projects[this.state.counter]} />
            <button className="btn flex-shrink-1" onClick={this.forward}>&gt;</button>
          </div>
        }



      </div>
    )
  }
}
