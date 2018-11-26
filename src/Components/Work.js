import React from 'react';
import IndProject from './IndProject.js';
import { Parallax } from 'react-parallax'; 

const image1 = "https://images.pexels.com/photos/1169107/pexels-photo-1169107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

const Work = (props) => {
   return (
      <Parallax
             bgImage= {image1} strength= {500}>
             <div style={{height: 1000}}>
               <div className= "work-section" id= "work">
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