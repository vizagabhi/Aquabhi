import React from 'react'
import NavBar from "./NavBar"
import "./Header.css"

const Header = () => {
  return (
    <div>
        <div>
        <h1 className='header'>...AQUABHI...</h1>
        <p className="subhead">One-stop Solution for All your supply water need...</p>
        </div>
     <NavBar/>
    </div>
  )
}

export default Header
