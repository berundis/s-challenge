import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="topnav">
      <NavLink activeClassName="active" to='#'>MyWebNow</NavLink>
      <div id="myLinks">
        <NavLink activeClassName="active" exact to='/'>Home</NavLink>
        <NavLink activeClassName="active" to="/why-us">Why Us</NavLink>
        <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        <NavLink activeClassName="active" to="/login">Login</NavLink>
        <NavLink activeClassName="active" to="/support">Support</NavLink>
      </div>
    </div>
  )
}

export default Navbar
