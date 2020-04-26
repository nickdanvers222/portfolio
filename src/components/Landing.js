import React, {useState, useContext} from 'react';
// import { Button } from 'react-bootstrap'
import './Landing.css'
import VizSensor from 'react-visibility-sensor';
import { NavContext } from '../context/NavContext'
import Nav from '../components/Header/Nav'

const Landing = (props) => {
    const [state, setState] = useContext(NavContext)
    const navigation = () => {
        document.querySelector('#project').scrollIntoView({ 
          behavior: 'smooth' 
        });
      };


    return (
       
       <div id='home' className='landing-div'>
            {/* <img src={props.src} className="App-logo" alt="logo" style={{marginBottom:'5vh'}} /> */}
            
            <VizSensor
            partialVisibility
            onChange={(isVisible) => {
              setState({visibility: isVisible});
              console.log(state);
            }}
            >
            <div className='landing-image'>

            <h1 className='landing-text landing-text-name'>Nicholas Danvers</h1>
            <h2 className='landing-text'>Full-Stack Web Developer based in Vancouver, BC</h2>
            <button className='landing-button' onClick={navigation}>Check out my work</button>
            <Nav></Nav>
            </div>
            </VizSensor>
           

        </div>
        
    )
}

export default Landing