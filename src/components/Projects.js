import React from 'react'
import ProjContainer from './ProjContainer'
const Projects = () => {
  return (
    <div id = "projects" className = "p-5">
        <h2>Projects</h2>
        <button className = "btn btn-info">View All</button>
        <ProjContainer></ProjContainer>
        <div>
        <button>View Code</button>
        <button>View Live</button>
        </div>
        <p className = "float-end w-50">Project info</p>
        </div>
  )
}

export default Projects