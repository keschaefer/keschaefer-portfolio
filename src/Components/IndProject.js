import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IndProject = (props) => {
   return props.projects.map(project => {
         return(
         <div className= "card ind-project" key= {project.title}>
            <p className= "project-title">{project.title}</p>
            <img className= "project-image card-img-top" src= {project.image} alt= "snapshot of live website for project"></img>
            <div className= "card-body">
               <p className= "card-text">{project.description}</p>
               <p className= "tech-used">{project.techused}</p>
               <div className= "links">
                  <button className= "live-site-button"><a target="_blank" rel="noopener noreferrer" href={project.livesite}>Visit {project.title}</a></button>
                  <a href= {project.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon class= "card-icon" icon={['fab', 'github']}/></a>
               </div>
            </div>
         </div>
         )
      })
   }  

export default IndProject
