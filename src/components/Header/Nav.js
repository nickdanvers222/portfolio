import React, {useContext} from "react"
import "./Nav.css"
import { NavContext } from '../../context/NavContext'

const Nav = () => {
  const [state, useState] = useContext(NavContext);
  console.log(state.visibility)
  return (
    <nav className={!state.visibility ? "navbar-sticky" : "navbar"}>
      <div className="navbar--logo-holder">
        <h1> NDanvers</h1>
      </div>
      <ul className="navbar--link">
        <li className="navbar--link-item">Home</li>
        <li className="navbar--link-item">Projects</li>
        <li className="navbar--link-item">About</li>
        <li className="navbar--link-item">Contact Me</li>
      </ul>
    </nav>
  )
}
  export default Nav