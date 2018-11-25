import React from 'react';
import IndProject from './IndProject.js';
import { Parallax } from 'react-parallax'; 

const image1 = "https://dl.dropboxusercontent.com/s/kk17mepqdxhsf78/IMG_4432.JPG"

const Work = (props) => {
   return (
      <Parallax
             bgImage= {image1} strength= {500}>
             <div style={{height: 1000}}>
               <div className= "work-section">
                  <h1>Work</h1>
                  <div className= "projects-container">
                  <IndProject projects = {props.projects}/>
                  </div>
               </div>
            </div> 
      </Parallax>    
   )
}

export default Work