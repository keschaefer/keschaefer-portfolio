import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Work from './Components/Work.js';
import Footer from './Components/Footer.js';
import Title from './Components/Title.js';

class App extends Component {
  constructor() {
    super()
      this.state = {
        projects: [
          {
          "title": "Denver Doggie",
          "description": "Site that clues Denver dog owners in on where their pup is welcome",
          "tech-used": "Express, Node.js, JavaScript, React",
          "image": "https://snag.gy/kFOJwG.jpg",
          "git-hub": "https://github.com/keschaefer/denver-doggie",
          "live-site":,
        },
        {
          "title": "g-school Inbox",
          "description": "Basic gmail-style inbox utilizing a school provided API",
          "tech-used": "React, JavaScript, AJAX, Bootstrap",
          "image": "https://snag.gy/Nhwdf5.jpg",
          "git-hub": "https://github.com/keschaefer/inbox-react-app",
          "live-site":"http://inbox-app-gschool.surge.sh/",
        },
        {
          "title": "g-Food Delivers" ,
          "description": "Basic online food ordering App.",
          "tech-used": "Javascript, AJAX, HTML, CSS",
          "image": "https://snag.gy/tBCreg.jpg",
          "git-hub": "https://github.com/keschaefer/g-food-Delivers",
          "live-site": "http://g-foodeats-keschaefer.surge.sh/",
        },
        {
          "title": "Pixel Art Maker",
          "description": "Create your own pixel art!",
          "tech-used": "Javascript, HTML, CSS" ,
          "image": "https://snag.gy/XAzGRQ.jpg",
          "git-hub": "https://github.com/keschaefer/pixel-art-maker-public",
          "live-site": "http://keschaefer-pixel-art.surge.sh/"
        },
      ]
      }
  }
  
  render() {
    return (
      <div className= "App">
        <div className= "body">
          <Header/>
          <Title />
          <About />
          <Work />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
