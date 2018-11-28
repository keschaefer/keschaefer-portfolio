import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Work from './Components/Work.js';
import Footer from './Components/Footer.js';
import Title from './Components/Title.js';
import Placeholder from './Components/Placeholder.js';
import { Parallax } from 'react-parallax'; 


class App extends Component {
  constructor() {
    super()
      this.state = {
        projects: [],
        image1: "https://images.pexels.com/photos/34077/pexels-photo.jpg?cs=srgb&dl=big-ben-black-and-white-bridge-34077.jpg&fm=jpg",
        image2: "https://images.pexels.com/photos/161863/edinburgh-carlton-hill-landscape-scotland-161863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      }
  }
  
  async componentDidMount() {
    let result = await fetch("data.json")
    let data =  await result.json()
    this.setState({
        projects: data
      })
      console.log(this.state.projects)
  }

  render() {
    return (
      <div className= "App">
        <div className= "body">
          <Header/>
          <Title />
          <Placeholder />
          <Parallax
            bgImage= {this.state.image1} strength= {700}>
            <div style={{height:500}}>
            </div>
          </Parallax>
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
