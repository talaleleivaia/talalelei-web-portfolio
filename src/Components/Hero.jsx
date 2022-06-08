import React from 'react';
import { Link } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";

import '../Styles/GlobalStyles.css';
import '../Styles/Hero.css';

function Hero() {
  return(
    <div className='section-container' id='to-home'>
      <div className='hero-wrapper'>
        <div className='hero-title'>
          <h1>Hi, I'm Talei</h1>
          <p>I build dynamic websites that showcase my passion for aesthetically functional design.</p>
          <div>
          <Link
          activeClass="active"
          to="to-about"
          spy={true}
          smooth={true}
          duration={700}
          className='btn-100'
          offset={-45}>
         Read More About Me
          </Link>
          <Link
          activeClass="active"
          to="to-about"
          spy={true}
          smooth={true}
          duration={700}
          offset={-120}
          className='arrow-down'>
            <IoIosArrowDown />
          </Link>
          </div>
        </div>
        <div className='hero-img'>
        </div>
      </div>
    
    </div>
  );
}

export default Hero;