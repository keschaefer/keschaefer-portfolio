import React from 'react';

const Contact = () => {
   return (
      <div className= "contact-section">
         <h1>Contact</h1>
         <div className= "contact-list">
         <span>If you're interested in talking more, drop me a line:</span>
                    <span>p: 206.538.8795 </span>
                    <a href="mailto:keschaefer@gmail.com">email: keschaefer@gmail.com</a>
            <div class="row social">
                <div class="github">
                    <a href="https://github.com/keschaefer"><i class="fab fa-github"></i></a>
                </div>
                <div class="insta">
                    <a href="https://www.instagram.com/keschaefer12/?hl=en"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
         
         </div>
      </div>
   )
}
export default Contact