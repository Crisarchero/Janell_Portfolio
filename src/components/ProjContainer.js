import React from 'react'
import Buttons from './Buttons'

const ProjContainer = (props) => {
  return (
    <div id = "project-container" className = "shadow-sm mt-2">

      <figure className=" border container overflow-hidden p-0">
        <img  src={props.project.img} alt = ""></img>
        <figcaption className="text-center">Uses:  {props.project.tools}</figcaption>
      </figure>
      <div id = "project-info" className="p-2">
        <Buttons code={props.project.code} url={props.project.url} />
        <article className=" border">
          <h3>{props.project.title}:</h3>
          <p>{props.project.description}</p>
        </article>
      </div>
    </div>
  )
}

export default ProjContainer