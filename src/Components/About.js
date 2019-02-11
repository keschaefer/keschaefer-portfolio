import React from 'react';

const About = () => {
   return (
      <div className="about-section" id="about">
         <h1>About</h1>
         <div className="background about-header">
            <h2>Background</h2>
            <p>I am a soon-to-be graduate from the Web Development Immersive program at Galvanize Denver. After years of plotting my escape from the world of professional fundraising events, I am so pleased to have begun this journey into the world of web development and am actively seeking an Junior Developer position in the greater Denver, CO area using my new skills. </p>
            <p>The Galvanize program is a six month, full-time, program that focuses on full stack development. I can build full stack JavaScript apps using front-end frameworks like React with a Node.js and Express backend.</p>
            <p>
            I fill my free time playing in the great outdoors including climbing, hiking, and camping. I love to travel and have zig-zagged my way across Europe, lived in Spain and Scotland, but also enjoy a good old Denver staycation.</p>
         </div>
         <div className="desired-org about-header">
            <h2>What I'm Looking For</h2>
            <p>I got into coding for both the intellectual challenge and the opportunity to drive change on a grander scale than my previous, local work, in nonprofits. I am highly detail-focused and love the precision that good code requires. I am looking to work at a small to mid sized company that focuses on a triple bottom line. Working on a project that combats climate change, has an outdoor industry connection, or just generally does good in the world would be a dream.</p> 
         </div>
         <div className="tech-stack about-header">
            <h2>My Tech Stack</h2>
            <div className="tech-list">
               <ul className="skill-list">
                  <li>JavaScript</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Angular</li>
                  <li>Bootstrap</li> 
               </ul>
               <ul className="skill-list">
                  <li>Express</li>
                  <li>Node.js</li>
                  <li>Knex</li>
                  <li>AJAX</li>
                  <li>Heroku</li>
                  <li>PostgreSQL</li>
                  <li>Bcrypt</li>
               </ul>
            </div>
         </div>
         <div className="resume-button">
            <button>
               <a href="https://docs.google.com/document/d/1XEcSTucUSt4IdD3dlvQhgCpjOIHgb63DG8CEdQ0z65Q/export?format=pdf">Download Resume</a>
            </button>
         </div>
      </div>
   )
}

export default About