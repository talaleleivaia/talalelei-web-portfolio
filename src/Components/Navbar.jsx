import React from 'react';
import { Link } from "react-scroll";

import '../Styles/GlobalStyles.css';
import '../Styles/Navbar.css';

function Navbar() {
 return (
   <div className='navbar-wrapper'>
    <div className='home-link'>
        <Link
          activeClass="active"
          to="to-home"
          spy={true}
          smooth={true}
          duration={700}
          >
          <h1>Talei.</h1>
          </Link>
    </div>
    <div className='navbar-container'>
      <div className='navbar-left'>
        <div className='links'>
          <Link
          activeClass="active"
          to="to-about"
          spy={true}
          smooth={true}
          duration={700}
          offset={-10}
          className='btn-99'>
          About 
          </Link>
        </div>
        <div className='links'>
          <Link
          activeClass="active"
          to="to-tech"
          spy={true}
          smooth={true}
          duration={700}
          offset={-120}
          className='btn-99'>
          Technologies 
          </Link>
        </div>
        <div className='links'>
          <Link
          activeClass="active"
          to="to-dev"
          spy={true}
          smooth={true}
          duration={700}
          offset={-80}
          className='btn-99'>
          Development
          </Link>
        </div>
        <div className='links'>
          <Link
          activeClass="active"
          to="to-design"
          spy={true}
          smooth={true}
          duration={700}
          offset={-80}
          className='btn-99'>
          Graphic Design
          </Link>
        </div>
        
      </div>
      <div className='navbar-right'>
        <div className='btn-100'>
          <Link
          activeClass="active"
          to="to-contact"
          spy={true}
          smooth={true}
          duration={700}>
          Contact 
          </Link>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Navbar;