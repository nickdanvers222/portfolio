import React from 'react';
import { Button } from 'react-bootstrap'
import './Landing.css'

const Landing = (props) => {

    return (
        <div className='landing-div'>
            {/* <img src={props.src} className="App-logo" alt="logo" style={{marginBottom:'5vh'}} /> */}
            <div className='landing-image'>
                <h1 className='landing-text landing-text-name'>Nicholas Danvers</h1>
                <h2 className='landing-text'>Full-Stack Web Developer based in Vancouver, BC</h2>
                <Button className='landing-button'>Check out my work</Button>

            </div>
        </div>
        
    )
}

export default Landing