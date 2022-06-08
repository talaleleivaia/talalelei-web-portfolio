import React from 'react';
import './App.css';

import Navbar from './Components/Navbar.jsx';
import SocialIcons from './Components/SocialIcons.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Tech from './Components/Tech.jsx';
import WebDev from './Components/WebDev.jsx';
import GraphicDesign from './Components/GraphicDesign.jsx';
import Contact from './Components/Contact.jsx'

function App() {
  return (
    <div className="app-container">
      <div className="right-side">
        <div className="hero">
          <Hero />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="stack">
          <Tech />
        </div>
        <div className="web-dev">
          <WebDev />
        </div>
        <div className="graphic-design">
          <GraphicDesign />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </div>
      <div className="header">
        <Navbar />
      </div>
      <div className="left-side">
        <SocialIcons />
      </div>
    </div>
    // <div className='app-container'>
    //   <div className='header'>
    //     <Navbar />
    //   </div>
    //   <div className='left-section'>
    //     <SocialIcons />
    //   </div>
    //   <div className='right-section'>
    //     <Hero />
    //     <About />
    //     <Tech />
    //     <WebDev />
    //     <GraphicDesign />
    //     <Contact />
    //   </div>
    // </div>
  );
}

export default App;