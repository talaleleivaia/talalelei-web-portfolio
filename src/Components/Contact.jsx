import React from 'react';
import { FaGithubSquare, FaLinkedin, FaBehanceSquare } from "react-icons/fa"; 

import '../Styles/GlobalStyles.css';
import '../Styles/Contact.css';

function Contact() {
  return(
    <div className='section-container' id='to-contact'>
      <div>
        <div className='section-title'>
          Well.. What did you think?
        </div>
        <div className='contact-wrapper'>
          <div className='contact-left'>
            <div className='contact-text-1'>
              If you are here I assume you need someone to fill a spot on your team...
            </div>
            <div className='contact-text-2'>
              I'm available!
            </div>
            <div className='contact-text-3'>
              (did that sound a bit desprate?)
            </div>
          </div>
          <div className='contact-right'>
            <div className='email-wrapper'>
              <div className='email'>Email</div>
              <div className='address'>
                <a href='mailto:contact@talei.com'>talei@iamtalei.com</a>
              </div>
            </div>
            <div className='calendly'>
              <div className='btn-100'>
                <a href='https://calendly.com/talaleleivaia/letstalk'>
                  Want to interview me?
                </a>
              </div>
            </div>
            <div className='contact-social-icons'>
              {/* <div className='contact-icon'>
                <a href='mailto:talaleleivaia@gmail.com'>
                  <MdEmail className='btn-94'/>
                </a>
              </div>  */}
              <div className='contact-icon'>
                <a href='https://github.com/talaleleivaia'>
                  <FaGithubSquare className='btn-94'/>
                </a>
              </div>
              <div className='contact-icon'>
                <a href='https://www.linkedin.com/in/talalelei-vaiaoga-201685186'>
                  <FaLinkedin className='btn-94'/>
                </a>
              </div>
              <div className='contact-icon'>
                <a href='https://www.behance.net/talaleleiv1242'>
                  <FaBehanceSquare className='btn-94'/>
                </a>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Contact;