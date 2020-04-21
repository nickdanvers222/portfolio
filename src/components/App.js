import React from 'react';
import synthwave from '../assets/synthwave.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Navbar, Nav } from 'react-bootstrap';
import ProjectItem from './ProjectItem'
import logo from '../assets/resized.png'
import ContactMe from './Contact'

// import recipeCapLogo from '../assets/logo2.png'
// const logo = require('../assets/resized.png');
// import Gallery from './Carousel.js'

// var Carousel = require('react-responsive-carousel').Carousel;
let recipeCapture = {
  title:'Recipe Capture',
  description:'Recipe Capture is a React Native application which uses the clarifai and spoonacular API to serve a user recipes for the ingredients they take pictures of, amazing!',
  url:'https://github.com/Ravenor222/Recipe-Capture'
}



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
        <ProjectItem title={recipeCapture.title} description={recipeCapture.description} src={logo} url={recipeCapture.url}>
        </ProjectItem>
        <ContactMe />
      </div>

    
    </div>
  );
}

export default App;

// style={{height:'50vh', width:'50vw'}}