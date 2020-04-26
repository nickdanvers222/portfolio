import React from 'react';
import './Footer.css';
import bootstrapLogo from '../assets/bootstrap.png';
import reactLogo from '../assets/react.png'
import storybookLogo from '../assets/storybook.png'
import storyLogo from '../assets/story.png'


const Footer = () => {


    return (
        <div className='footer-container'>
            <p className='copyright' >© 2020 NICHOLAS DANVERS . MADE IN CANADA</p>
            <p className='mentions'> This was made with great free and open source packages like the ones below</p>
            <div className='footer-packages'>
                <a href='https://reactjs.org/'><div onClick={()=>{}} style={{backgroundImage:'url('+reactLogo+')'}} className='package' ></div></a>
                <a href='https://react-bootstrap.github.io/'><div onClick={()=>{}} style={{backgroundImage:'url('+bootstrapLogo+')', marginRight:'2vw'}} className='package' ></div></a>
                <a href='https://storybook.js.org/'><div onClick={()=>{}} style={{backgroundImage:'url('+storyLogo+')', width:'3vw'}} className='package' ></div></a>

            </div>
        </div>
    )
}

export default Footer