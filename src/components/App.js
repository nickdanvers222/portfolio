import React from 'react';
import synthwave from '../assets/synthwave.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ProjectItem from './ProjectItem'
import recipeCapLogo from '../assets/logo2.png'
import logo from '../logo192.png'
import Gallery from './Carousel.js'
import { Navbar, Nav } from 'react-bootstrap';

var Carousel = require('react-responsive-carousel').Carousel;


function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant='dark' expand="lg">
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
    </Navbar>
      <div className="main-div">
        <img src={synthwave} className="App-logo" alt="logo" style={{marginBottom:'5vh'}} />

        <h2 style={{marginBottom:'5vh'}} >Projects</h2>
        <ProjectItem />
      </div>

    
    </div>
  );
}

export default App;

// style={{height:'50vh', width:'50vw'}}