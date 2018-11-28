import React from 'react';
import IndProject from './IndProject.js';

const Work = (props) => {
   return (
      <div className= "work-section" id= "work">
         <h1>Work</h1>
         <div className= "projects-container">
         <IndProject projects = {props.projects}/>
         </div>
      </div>        
   )
}

export default Work