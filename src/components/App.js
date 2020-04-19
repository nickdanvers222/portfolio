import React from 'react';
import mtn from '../synthwave.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';


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
      <img src={mtn} className="App-logo" alt="logo" />

      </div>

    </div>
  );
}

export default App;
