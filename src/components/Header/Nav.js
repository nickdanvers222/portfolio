import React, {useContext} from "react"
import "./Nav.css"
import { NavContext } from '../../context/NavContext';
import logo from '../../assets/whitelogo.png'

const Nav = () => {
  const [state, useState] = useContext(NavContext);

  
  const navigation = (item) => {
    document.querySelector(item).scrollIntoView({ 
      behavior: 'smooth' 
    });
  };



  return (
    <nav className={state.visibility ? "navbar-sticky" : "second-navbar"}>
    {/* <nav className="navbar-sticky"> */}

      <div className="navbar--logo-holder">
        {/* <div onClick={()=>{navigation('#home')}} className='navbar--logo'><p className='navbar--logo-text' > &lt;ND&gt; </p></div> */}
      </div>
      <ul className="navbar--link">
        <li className={state.visibility ? "navbar--link-item" : 'navbar-vision'} onClick={() => {navigation('#home')}}>Home</li>
        <li className={state.visibility ? "navbar--link-item" : 'navbar-vision'} onClick={() => {navigation('#project')}}>Projects</li>
        <li className={state.visibility ? "navbar--link-item" : 'navbar-vision'} onClick={() => {navigation('#about')}}>About</li>
        <li className={state.visibility ? "navbar--link-item" : 'navbar-vision'} onClick={() => {navigation('#contact')}}>Contact Me</li>
      </ul>
    </nav>
  )
}
  export default Nav