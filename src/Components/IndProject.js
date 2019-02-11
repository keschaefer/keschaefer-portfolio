import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IndProject = (props) => {
   return props.projects.map(project => {
      return(
         <div className="card ind-project rounded" key= {project.title}>
            <p className="project-title">{project.title}</p>
            <img className="project-image card-img-top" src= {project.image} alt="snapshot of live website for project"></img>
            <div className="card-body">
               <div className="card-text">
                  <p className="card-description">{project.description}</p>
                  <p className="tech-used">{project.techused}</p>
               </div>
               <div className="links">
                  <button className="live-site-button"><a target="_blank" rel="noopener noreferrer" href={project.livesite}>Visit {project.link}</a></button>
                  <a href= {project.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon class="card-icon" icon={["fab", "github"]}/></a>
               </div>
            </div>
         </div>
      )
   })
}  

export default IndProject
