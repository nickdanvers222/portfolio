import React from 'react';
import './MailTo.css'
import lilogo from '../assets/lilogo.png'
import githublogo from '../assets/githublogo.png'

const MailTo = () => {

    return (
        <div id='contact' className='contact-container'>
            <h2>Like what you see?</h2>
            <p>Contact me and let's see if we can create something together!</p>
            <a href='mailto:ndanvers222@gmail.com'><button className="sendto-button">Contact Me</button></a>
            
            <div className='social-row'>
            <a href='https://www.linkedin.com/in/hopefuldeveloper/'><div className='contact-icon' style={{backgroundImage:'url('+lilogo+')'}}></div></a>
            <a href='https://github.com/Ravenor222/'><div className='contact-icon' style={{backgroundImage:'url('+githublogo+')'}}></div></a>



            </div>

        </div>
    )
}; 

export default MailTo
