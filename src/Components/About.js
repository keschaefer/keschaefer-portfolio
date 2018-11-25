import React from 'react';
import { Parallax } from 'react-parallax'; 

const image1 = "https://images.pexels.com/photos/161863/edinburgh-carlton-hill-landscape-scotland-161863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

const About = () => {
   return (
      <Parallax
             bgImage= {image1} strength= {500}>
             <div style={{height:500}}> 
      <div className= "about-section">
         <h1>About</h1>
         <div className= "background">
            <h2>Background</h2>
            <p>I am a current student in the Web Development Immersive program at Galvanize Denver. After years of plotting my escape from the world of professional fundraising events, I am so pleased to have begun this journey into the world of web development and am actively seeking an entry-level position using my new skills.

            I fill my free time playing in the great outdoors including climbing, hiking, and camping. I love to travel and have zig-zagged my way across Europe, lived in Spain and Scotland, but also enjoy a good old Denver staycation.</p>
         </div>
         <div className= "desired-org">
            <h2>What I'm Looking For</h2>
            I got into coding for both the intellectual challenge and the opportunity to drive change on a grander scale than my previous, local work, in non-profits. I am highly detail-focused and love the precision that good code requires. I am looking to work at a small-mid sized company that focuses on a triple bottom line. Working on a project that combats climate change, has an outdoor industry connection, or just generally does good in the world would be a dream. 
         </div>
         <div className= "why-me">
            <h2>Why Kate?</h2>
            <p>Why choose me to be part of your engineering team? Quite simply I am....</p>
         </div>
      </div>
      </div>
   </Parallax> 
   )
}

export default About