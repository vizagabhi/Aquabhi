import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
      <ul className='nav-list'>
        <li className='nav-item'>Home</li>
        <li className='nav-item'>Contact</li>
        <li className='nav-item'>About Us</li>
        <li className='nav-item'>Login</li>
        <li className='nav-item'>Register</li>
      </ul>
    </div>
  )
}

export default NavBar
