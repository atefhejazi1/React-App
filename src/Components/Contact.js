import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone}  from '@fortawesome/free-solid-svg-icons'
import {faHourglass}  from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
  return <div>
      <section className='section-contact' id='Contact'>
          <center><h2>CONTACT ME</h2></center>
          <div className='div-contact'>
                <center>
                    <p className='p5'>Manhattan, New York, NY, United States</p>
                    <span><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 985-245-1730</span>
                    <p className='p6'><FontAwesomeIcon icon={faHourglass}></FontAwesomeIcon> Mon-Fri - 08:00-19:00</p>

                    <form>
                        <input type="text" placeholder='Name' /> <br />
                        <input type="text" placeholder='Phone'/> <br />
                        <input type="email" placeholder='Email address'/> <br />
                        <input className='input-text' type="text" placeholder='Message'/> <br />
                        <button>CONTACT US</button>
                    </form>
                </center>
          </div>
      </section>
  </div>;
}
