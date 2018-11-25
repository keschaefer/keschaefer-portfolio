import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Work from './Components/Work.js';
import Footer from './Components/Footer.js';
import Title from './Components/Title.js';
import Placeholder from './Components/Placeholder.js';


class App extends Component {
  constructor() {
    super()
      this.state = {
        projects: [
          {
          "title": "Denver Doggie",
          "description": "Site that clues Denver dog owners in on where their pup is welcome",
          "techused": "Express, Node.js, JavaScript, React",
          "image": "https://snag.gy/kFOJwG.jpg",
          "github": "https://github.com/keschaefer/denver-doggie",
          "livesite": "www.test.com",
        },
        {
          "title": "g-school Inbox",
          "description": "Basic gmail-style inbox utilizing a school provided API",
          "techused": "React, JavaScript, AJAX, Bootstrap",
          "image": "https://snag.gy/Nhwdf5.jpg",
          "github": "https://github.com/keschaefer/inbox-react-app",
          "livesite":"http://inbox-app-gschool.surge.sh/",
        },
        {
          "title": "g-Food Delivers" ,
          "description": "Basic online food ordering App.",
          "techused": "Javascript, AJAX, HTML, CSS",
          "image": "https://snag.gy/tBCreg.jpg",
          "github": "https://github.com/keschaefer/g-food-Delivers",
          "livesite": "http://g-foodeats-keschaefer.surge.sh/",
        },
        {
          "title": "Pixel Art Maker",
          "description": "Create your own pixel art!",
          "techused": "Javascript, HTML, CSS" ,
          "image": "https://snag.gy/XAzGRQ.jpg",
          "github": "https://github.com/keschaefer/pixel-art-maker-public",
          "livesite": "http://keschaefer-pixel-art.surge.sh/"
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
          <Placeholder />
          <About />
          <Placeholder />
          <Work projects = {this.state.projects} />
          <Placeholder />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
