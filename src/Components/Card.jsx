import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai";

import '../Styles/GlobalStyles.css';
import '../Styles/Card.css';
import '../Styles/Modal.css';

export default function Card(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

    if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  
  return(
<>
      <div className='card'id='trim' onClick={toggleModal}>
        <img src={props.src} alt={props.title}/>
        <div className='card-overlay'>
          <h1>{props.title}</h1>
          <p>{props.tool}</p>
          <h4 className='btn-100'>More Info</h4>
        </div>
      </div>
  {/* Modal  */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          
          <div className="modal-container">
            <div className="content-container">
              <div className='modal-left'>
                <h1>{props.title}</h1>
                <p>
                  {props.description}
                </p>
                <div className='modal-links'>
                  <div>
                    <a href={props.git} className='btn-100'>Github</a>
                  </div>
                  <div>
                    <a href={props.site} className='btn-100'>Site</a>
                  </div>
                  <div>
                    <a href={props.src} className='btn-100'>Full Image</a>
                  </div>
                </div>
              </div>
              <div className='modal-right'>
                <img className='contain' src={props.src} alt={props.title} />
              </div>            
            </div>
            
            <div className="close-modal" onClick={toggleModal}>
              <AiFillCloseCircle />
            </div>
          </div>
        </div>
      )}
</>
  );
}

// export default Card;