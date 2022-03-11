import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return <div>
      <footer>
        <div className='data'>
        <h5>Into The Woods</h5>
            <p>Copyright © 2022 All rights reserved <br />
Powered By <a href="https://www.site123.com">SITE123</a> - <a href="https://www.site123.com">Create a website</a></p>
        </div>
        <div className='icon'>
        <ul>
              <li>HOME</li>
              <li>POEMS</li>
              <li>ABOUT ME</li>
              <li>CONTACT ME</li>
              
          </ul> 
             <div className='item'>
             <FontAwesomeIcon icon={faTwitter} className='icons'></FontAwesomeIcon>
              <FontAwesomeIcon icon={faLinkedin} className='icons'></FontAwesomeIcon>
             </div>
        </div>
      </footer>
  </div>;
}
