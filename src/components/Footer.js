import React from 'react';
import './Footer.css';
import bootstrapLogo from '../assets/bootstrap.png';
import reactLogo from '../assets/react.png';
import storybookLogo from '../assets/storybook.png';
import storyLogo from '../assets/story.png';
import ReactPackage from './ReactPackage';
import BootstrapPackage from './BootstrapPackage';



const Footer = () => {


    return (
        <div className='footer-container'>
            <p className='copyright' >© 2020 NICHOLAS DANVERS . MADE IN CANADA</p>
            <p className='mentions'> This was made with great packages like the ones below</p>
            <div className='footer-packages'>
                {/* <a href='https://reactjs.org/'><div style={{backgroundImage:'url('+reactLogo+')'}} className='package' ></div></a> */}
                <ReactPackage />
                {/* <a href='https://react-bootstrap.github.io/'><div style={{backgroundImage:'url('+bootstrapLogo+')', backgroundPosition:'center'}} className='package' ></div></a> */}
                <BootstrapPackage />
            </div>
        </div>
    )
}

export default Footer