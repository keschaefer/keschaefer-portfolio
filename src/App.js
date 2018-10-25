import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import Footer from './Footer.js';
import Title from './Title.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
