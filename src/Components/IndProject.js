import React from 'react';

const IndProject = (props) => {
   return props.projects.map(project => {
         return(
         <div className= "card ind-project" key= {project.title}>
            <img className= "project-image card-img-top" src= {project.image} alt= "snapshot of live website for project"></img>
            <div className= "card-body">
               <title>{project.title}</title>
               
               <p className= "card-text">{project.description}</p>
               <p className= "tech-used">{project.techused}</p>
               <a target="_blank"href={project.livesite}>{project.title} Site</a>
               {/* <p className= "live-site">{project.livesite}</p> */}
               <p className= "git-hub">{project.github}</p>
             
            </div>
         </div>
         )
      })
   }  

export default IndProject
