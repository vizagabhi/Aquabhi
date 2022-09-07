import React from 'react'
import NavBar from "./NavBar"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import Register from './Register'
import {Routes,Route} from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div>
        <div>
        <h1 className='header'>...AQUABHI...</h1>
        <p className="subhead">One-stop Solution for All your supply water need...</p>
        </div>
     <NavBar/>
     <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
     </Routes>
    </div>
  )
}

export default Header
