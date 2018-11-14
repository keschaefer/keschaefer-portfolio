import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Work from './Components/Work.js';
import Footer from './Components/Footer.js';
import Title from './Components/Title.js';

class App extends Component {
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
