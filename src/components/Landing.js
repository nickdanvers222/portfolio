import React from 'react';
// import { Button } from 'react-bootstrap'
import './Landing.css'
import { Navbar, Nav } from 'react-bootstrap';

const Landing = (props) => {

    return (
       
       <div className='landing-div'>
            {/* <img src={props.src} className="App-logo" alt="logo" style={{marginBottom:'5vh'}} /> */}
            <div className='landing-image'>
            {/* <Navbar className='navbar'>
                <Navbar.Brand href="#home">Nicholas Danvers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
                <Nav.Link href="#link">Interests</Nav.Link>
                <Nav.Link href="#link">Posts</Nav.Link>
                <Nav.Link href="#link">Contact me</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Navbar> */}
            <h1 className='landing-text landing-text-name'>Nicholas Danvers</h1>
            <h2 className='landing-text'>Full-Stack Web Developer based in Vancouver, BC</h2>
            <button className='landing-button'>Check out my work</button>

            </div>
            
        </div>
        
    )
}

export default Landing