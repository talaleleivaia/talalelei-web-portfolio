import React from 'react';

import GraphicDesignData from '../Constants/GraphicDesignData.jsx';
import Card from './Card.jsx';
import '../Styles/GlobalStyles.css';
import '../Styles/Projects.css';

function GraphicDesign() {
  return(
    <div>
      <div>
        <div className='section-title' id='to-design'>
          Graphic Design from the Heart 
        </div> 
        <div className='projects-wrapper'>
          {GraphicDesignData.map((e)=>{
          return (
            <Card
              key={e.id}
              src={e.src}
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

export default GraphicDesign;