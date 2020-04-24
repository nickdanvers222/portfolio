import React from "react"
import "./Nav.css"
import Logo from "../../assets/logo2.png"

const Nav = ({ sticky }) => (
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
      <div className="navbar--logo-holder">
        {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
        <h1> Stick'Me</h1>
      </div>
      <ul className="navbar--link">
        <li className="navbar--link-item">Home</li>
        <li className="navbar--link-item">About</li>
        <li className="navbar--link-item">Blog</li>
      </ul>
    </nav>
  )
  export default Nav