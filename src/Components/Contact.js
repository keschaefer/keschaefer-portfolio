import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
   return (
      <div className="contact-section" id="contact">
         <h1 className="contact-header">Contact</h1>
         <p className="contact-text">If you are interested in learning more about me and my work, be in touch!</p> 
         <p className="contact-text"><b>phone:</b> 206.538.8795</p> 
         <p className="contact-text"><b>email:</b> keschaefer@gmail.com</p>
         <div className="contact-icons">
            <div className="email-contact">
               <a href="mailto:keschaefer@gmail.com" ><FontAwesomeIcon class="icon" icon="envelope"/></a>
            </div>
            <div className="github">
               <a href="https://github.com/keschaefer" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon class="icon" icon={['fab', 'github']}/></a>
            </div>
            <div className="linkedin">
               <a href="https://www.linkedin.com/in/keschaefer12/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon class="icon" icon={['fab', 'linkedin']}/></a>
            </div>  
            <div className="insta">
               <a href="https://www.instagram.com/keschaefer12/?hl=en" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon class="icon" icon={['fab', 'instagram']}/></a>
            </div> 
         </div>
      </div>
   )
}

export default Contact