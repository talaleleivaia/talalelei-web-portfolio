import React from 'react';
import Carousel from 'nuka-carousel';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

import '../Styles/GlobalStyles.css';
import '../Styles/Timeline.css'
import TimelineData from '../Constants/TimelineData.jsx';


function Timeline() {
  return(
    <div className='timeline-section'>
      <div className='timeline-wrapper'>
        <Carousel  
          slidesToShow={3} 
          cellAlign="center" 
          dragging={true} 
          cellSpacing={40}
          defaultControlsConfig={{
            nextButtonClassName: 'next-btn',
            nextButtonText: <MdOutlineChevronRight />,
            prevButtonClassName: 'prev-btn',
            prevButtonText: <MdOutlineChevronLeft />,
            pagingDotsStyle: {display: 'none'}
          }}
          >
          {TimelineData.map((e)=>{
                   return (
                    <div className='timestamp-wrapper'>
                      <div className='timestamp-date'>{e.date}</div>
                      <div className='timestamp-text'>{e.text}</div>
                    </div>
                  );})}
        </Carousel>
      </div>
    </div>
  );
}

export default Timeline;