import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Contact = () => {
   return (
      <div className= "contact-section">
         
         <h1>Contact</h1>
         {/* <div className= "contact-list"> */}
         <p>If you are interested in learning more about me and my work, be in touch! </p>
         <p>
         p: 206 538 8795   e: keschaefer@gmail.com</p>
            <div className= "contact-icons">
               {/* <span className= "phone-contact">
                  <FontAwesomeIcon class= "icon" icon="phone-square"/>
                  <p>p: 206.538.8795</p>
               </span>    */}
               <div className= "email-contact">
                  <a href="mailto:keschaefer@gmail.com" ><FontAwesomeIcon class= "icon" icon="envelope"/></a>
               </div>
               <div class="github">
                    <a href="https://github.com/keschaefer" target="_blank"><FontAwesomeIcon class= "icon" icon={['fab', 'github']}/></a>
                </div>
                <div class="linkedin">
                    <a href="https://www.linkedin.com/in/keschaefer12/" target="_blank"><FontAwesomeIcon class= "icon" icon={['fab', 'linkedin']}/></a>
                </div>  
                <div class="insta">
                    <a href="https://www.instagram.com/keschaefer12/?hl=en" target="_blank"><FontAwesomeIcon class= "icon" icon={['fab', 'instagram']}/></a>
                </div> 
         </div>
      </div>
   )
}
export default Contact