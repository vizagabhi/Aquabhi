import React from 'react'
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {

  return (
    <div>
      <ul className='nav-list'>
        <li className='nav-item'><NavLink to='/'>Home</NavLink></li>
        <li className='nav-item'><NavLink to='/services'>Services</NavLink></li>
        <li className='nav-item'><NavLink to='/subscription'>Subscription</NavLink></li>
        <li className='nav-item'><NavLink to='/login'>Login</NavLink></li>
        <li className='nav-item'><NavLink to='/register'>Register</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar
