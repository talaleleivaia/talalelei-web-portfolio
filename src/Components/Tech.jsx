import React from 'react';

import TechData from '../Constants/TechData.jsx';
import '../Styles/GlobalStyles.css';
import '../Styles/Tech.css';

function Tech() {
  return(
  <div className='section-container'>
    <div>
      <div className='section-title' id='to-tech'>
        My Full Stack
      </div>
      <div className='tech-subtitle'>
        <h2>
I've worked with a range of technologies within the world of web development and design.
        </h2>
      </div>
      <div className='tech-wrapper'>
          {TechData.map((e)=>{
             return (
              <div className='stack-wrapper'>
                <div className='stack-title'>{e.stack}</div>
                <p>Experience with</p>
                <div className='stack-list'>{e.tech}</div>
              </div>
          );})}
      </div>
    
    </div>
  </div>
  );
}

export default Tech;