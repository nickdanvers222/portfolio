import React from 'react';
import './MailTo.css'
import lilogo from '../assets/lilogo.png'


const MailTo = () => {

    return (
        <div id='contact' className='contact-container'>
            <h2>Like what you see?</h2>
            <p>Contact me and let's see if we can create something together!</p>
            <a href='mailto:ndanvers222@gmail.com'><button className="sendto-button">Contact Me</button></a>
        </div>
    )
}; 

export default MailTo
