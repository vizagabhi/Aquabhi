import React from 'react'
import NavBar from "./NavBar"
import Home from './Home'
import Services from './Services'
import Subscription from './Subscription'
import Login from './Login'
import Register from './Register'
import {Routes,Route} from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className='head-container'>
        <div>
        <h1 className='header'>...AQUABHI...</h1>
        <p className="subhead">One-stop Solution for All your supply water need...</p>
        </div>
     <NavBar/>
     <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/services' element = {<Services/>}/>
        <Route path='/subscription' element = {<Subscription/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
     </Routes>
    </div>
  )
}

export default Header
