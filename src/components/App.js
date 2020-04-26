import React, { Fragment, useEffect, useRef, useState } from "react"
import landscape from '../assets/landscape.jpeg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PortfolioItem from './PortfolioItem'
import ContactMe from './Contact'
import '../fonts/Acme-Regular.ttf'
import Landing from './Landing';
import { NavContextProvider }from '../context/NavContext'
import About from './About'
import Footer from './Footer'
import { recipeCapture, scheduler, onTheGo, tweeter } from '../context/projects'
import MailTo from './MailTo.js'
import Nav from './Header/Nav'

function App() {
  

  return (
    <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet"></link>

       <NavContextProvider>
       <Nav></Nav>
        <Landing src={landscape} />



        {/* <img src={landscape} className="App-logo" alt="logo" style={{marginBottom:'5vh'}} /> */}
        {/* <Nav /> */}
      <div className="main-div">
        <div className='project-container'>
         <h2 className='project-header' >PROJECTS</h2>
         <p  className='project-header'> These various projects were developed with new languages to expand my skill set</p>
        </div>
        <PortfolioItem item={recipeCapture}/>
        <div ></div>
        <PortfolioItem item={scheduler}/>
        <About />
        <MailTo />
        {/* <ContactMe /> */}
        <Footer />
      </div>
        </NavContextProvider>

    
    </div>
  );
}

export default App;
