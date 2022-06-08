import React from 'react';

import Timeline from './Timeline.jsx';
import '../Styles/GlobalStyles.css';
import '../Styles/About.css';

function About() {
  return(
    <div className='section-container' id='to-about'>
      <div>
        <div className='section-title'>
          This is me.
        </div>
        <div className='about-wrapper'>
          <div className='about-left'>
            
          </div>
          <div className='about-right'>
            <p>The full name is <span>Talalelei Vaiaoga</span> but you can call me Talei (tah-lay). It's just easier that way. I began my <span>web dev journey</span> many years ago as a graphic design student at BYU-Hawaii learning the basics of HTML and CSS. <br></br>Many years passed and I didn't touch anything related to the topic. Then through Bottega University, <span>I leveled up as a developer</span> learning fullstack skills and delving entirely into the path of web development.
            </p>
            <div className='timeline-wrapper'>
              <Timeline />
            </div>
          </div>
          {/* <div className='timeline-wrapper'>
              <Timeline />
          </div> */}
        </div>
      </div>
    </div>
    
  );
}

export default About;