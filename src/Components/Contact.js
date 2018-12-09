import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Contact = () => {
   return (
      <div className= "contact-section">
         
         <h1>Contact</h1>
         <p>If you are interested in learning more about me and my work, be in touch! </p>
         <p>phone: 206 538 8795</p>   
         <p>email: keschaefer@gmail.com</p>
            <div className= "contact-icons">
               <div className= "email-contact">
                  <a href="mailto:keschaefer@gmail.com" ><FontAwesomeIcon class= "icon" icon="envelope"/></a>
               </div>
               <div class="github">
                    <a href="https://github.com/keschaefer" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon class= "icon" icon={['fab', 'github']}/></a>
                </div>
                <div class="linkedin">
                    <a href="https://www.linkedin.com/in/keschaefer12/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon class= "icon" icon={['fab', 'linkedin']}/></a>
                </div>  
                <div class="insta">
                    <a href="https://www.instagram.com/keschaefer12/?hl=en" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon class= "icon" icon={['fab', 'instagram']}/></a>
                </div> 
         </div>
      </div>
   )
}
export default Contact