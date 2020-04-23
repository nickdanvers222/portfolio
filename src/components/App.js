import React from 'react';
import synthwave from '../assets/synthwave.jpg';
import landscape from '../assets/landscape.jpeg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Navbar, Nav } from 'react-bootstrap';
import PortfolioItem from './PortfolioItem'
import logo from '../assets/logo300.png'
import ContactMe from './Contact'
import '../fonts/Acme-Regular.ttf'
import Landing from './Landing';
import GlobalFonts from '../fonts/fonts';

// import recipeCapLogo from '../assets/logo2.png'
// const logo = require('../assets/resized.png');
// import Gallery from './Carousel.js'

// var Carousel = require('react-responsive-carousel').Carousel;
let recipeCapture = {
  title:'Recipe Capture',
  description:'Recipe Capture is a React Native application which uses the clarifai and spoonacular API to serve a user recipes for the ingredients they take pictures of, amazing!',
  url:'https://github.com/Ravenor222/Recipe-Capture'
}
let scheduler = {
  title:'React Scheduler',
  description:'The React Scheduler is a time management platform that allows a fictional set of students access to scheduling meetings/appointments with different staff members ',
  url:'https://github.com/Ravenor222/react-scheduler'
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
        <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet"></link>
        {/* <img src={landscape} className="App-logo" alt="logo" style={{marginBottom:'5vh'}} /> */}
        <Landing src={landscape} />
      <div className="main-div">
        <div className='project-container'>
         <h2 className='project-header' >PROJECTS</h2>
         <p className='project-header'> These various projects were developed with new languages to expand my skill set</p>
        </div>
        <PortfolioItem />
        {/* <ProjectItem title={recipeCapture.title} description={recipeCapture.description} src={logo} url={recipeCapture.url}>
        </ProjectItem> */}
        {/* <ProjectItem title={scheduler.title} description={scheduler.description} src={logo} url={scheduler.url}>
        </ProjectItem> */}
        <ContactMe />
      </div>

    
    </div>
  );
}

export default App;

// style={{height:'50vh', width:'50vw'}}