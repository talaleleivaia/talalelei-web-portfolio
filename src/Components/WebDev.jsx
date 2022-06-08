import React from 'react';

import WebDevData from '../Constants/WebDevData.jsx';
import Card from './Card.jsx';
import '../Styles/GlobalStyles.css';
import '../Styles/Projects.css';

function WebDev() {
  return(
    <div>
      <div>
        <div className='section-title' id='to-dev'>
          Web Development for the Soul 
        </div>
          <div className='projects-wrapper'>
            {WebDevData.map((e)=>{
            return (
              <Card
                key={e.id}
                src={e.src}
                git={e.git}
                site={e.site}
                title={e.title}
                tool={e.tool}
                description={e.description}
                />
            );})}
          </div>
      </div>
    </div>
  );
}

export default WebDev;