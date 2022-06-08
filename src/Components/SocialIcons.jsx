import React from 'react';
import { FaGithubSquare, FaLinkedin, FaBehanceSquare } from "react-icons/fa"; 
import { MdEmail } from "react-icons/md"; 

import '../Styles/GlobalStyles.css';
import '../Styles/SocialIcons.css';

function SocialIcons() {
  return(
    <div className='icons-wrapper'>
      <div className='icon'>
        <MdEmail className='btn-94' />
      </div> 
      <div className='icon'>
        <a href='https://github.com/talaleleivaia'>
          <FaGithubSquare className='btn-94'/>
        </a>
      </div>
      <div className='icon'>
        <a href='https://www.linkedin.com/in/talalelei-vaiaoga-201685186'>
          <FaLinkedin className='btn-94'/>
        </a>
      </div>
      <div className='icon'>
        <a href='https://www.behance.net/talaleleiv1242'>
          <FaBehanceSquare className='btn-94'/>
        </a>
      </div>  
    </div>
  );
}

export default SocialIcons;