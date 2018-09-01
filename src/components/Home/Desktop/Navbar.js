import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <NavLink style={{float: 'left', fontSize: '20px'}} activeClassName="active" to='#'>MyWebNow</NavLink>
      <NavLink className="button" to="/support">Support</NavLink>
      <NavLink style={{marginLeft: '40px'}} activeClassName="active" to="/login">Login</NavLink>
      <NavLink activeClassName="active" to="/contact">Contact</NavLink>
      <NavLink activeClassName="active" to="/why-us">Why Us</NavLink>
      <NavLink activeClassName="active" exact to='/'>Home</NavLink>
    </div>
  )
}

export default Navbar
