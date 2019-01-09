import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Work from './Components/Work.js';
import Footer from './Components/Footer.js';
import Title from './Components/Title.js';
import Placeholder from './Components/Placeholder.js';
import image from './IMG_4432.JPG' 
import image2 from './P7180360.JPG'
import { Parallax } from 'react-parallax';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faPhoneSquare, faEnvelope)

class App extends Component {
  constructor() {
    super()
      this.state = {
        projects: [],
      }
  }
  
  async componentDidMount() {
    let result = await fetch("data.json")
    let data =  await result.json()
    this.setState({
        projects: data
      })
  }

  render() {
    return (
      <div className= "App">
        <div className= "body">
          <Header/>
          <Title />
          <Placeholder />
          <Parallax
            bgImage= {image} strength= {700}>
            <div style={{height:500}}>
            </div>
          </Parallax>
          <About />
          <Placeholder />
          <Parallax
             bgImage= {image2} strength= {700}>
             <div style={{height: 500}}>
             </div>
          </Parallax>   
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
