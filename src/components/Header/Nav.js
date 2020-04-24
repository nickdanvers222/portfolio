import React, {useContext} from "react"
import "./Nav.css"
import { NavContext } from '../../context/NavContext'

const Nav = () => {
  const [state, useState] = useContext(NavContext);

  
  const navigation = (item) => {
    document.querySelector(item).scrollIntoView({ 
      behavior: 'smooth' 
    });
  };



  return (
    <nav className={!state.visibility ? "navbar-sticky" : "navbar"}>
      <div className="navbar--logo-holder">
        <h1> NDanvers</h1>
      </div>
      <ul className="navbar--link">
        <li className="navbar--link-item" onClick={() => {navigation('#home')}}>Home</li>
        <li className="navbar--link-item" onClick={() => {navigation('#project')}}>Projects</li>
        <li className="navbar--link-item" onClick={() => {navigation('#about')}}>About</li>
        <li className="navbar--link-item" onClick={() => {navigation('#contact')}}>Contact Me</li>
      </ul>
    </nav>
  )
}
  export default Nav