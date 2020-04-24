import React, { Fragment, useEffect, useRef, useState } from "react"
import landscape from '../assets/landscape.jpeg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Navbar, Nav } from 'react-bootstrap';
import PortfolioItem from './PortfolioItem'
import logo from '../assets/logo300.png'
import ContactMe from './Contact'
import '../fonts/Acme-Regular.ttf'
import Landing from './Landing';
import iphone from '../assets/RCiphone.png'
import laptop from '../assets/scheduler2.png'

import Nav from './Header/Nav'

let recipeCapture = {
  title:'Recipe Capture',
  stack:'React-Native, Express, Clarifai & Spoonacular',
  description:"A React Native application which uses the clarifai and spoonacular API to serve a user recipes for the ingredients they've taken a picture of, amazing!",
  url:'https://github.com/Ravenor222/Recipe-Capture',
  color:'lightsalmon',
  photo:iphone,
}
let scheduler = {
  title:'Interview Scheduler',
  stack:'React JS, PSQL, SCSS, Express',
  description:'A time management platform that allows a fictional set of students access to scheduling meetings/appointments with different staff members ',
  url:'https://github.com/Ravenor222/react-scheduler',
  color:'#222f3e',
  photo:laptop
}

function App() {





/////////////
const [isSticky, setSticky] = useState(false)

const stickyRef = useRef(null)
const handleScroll = () => {
  if (stickyRef.current) {
  window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
  ? setSticky(true)
  : setSticky(false);
  }
  };

useEffect(()=> {
  return () => {
    window.removeEventListener("scroll", () => handleScroll)
  }
}, []);
window.addEventListener("scroll", handleScroll)
/////////////




  // const handleScroll = () => {
  //   window.pageYOffset > '100vh'
  //     ? console.log('A test')
  //     : console.log('B test', window.pageYOffset)
  // }

  // yOffset = window.pageYOffset;
  return (
    <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet"></link>


        {/* <img src={landscape} className="App-logo" alt="logo" style={{marginBottom:'5vh'}} /> */}

        <Landing  src={landscape} />
        <Nav sticky={isSticky} />

        {/* <div className='navbar'></div> */}



    {/* <Navbar style={{backgroundColor:'transparent'}}>
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
      <div className="main-div">
        <div className='project-container'>
         <h2 className='project-header' >PROJECTS</h2>
         <p  className='project-header'> These various projects were developed with new languages to expand my skill set</p>
        </div>
        <PortfolioItem item={recipeCapture}/>
        <div ref={stickyRef}></div>
        <PortfolioItem item={scheduler}/>

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