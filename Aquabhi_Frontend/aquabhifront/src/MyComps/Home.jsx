import React from 'react'
import './Images/waterhome.jpg'
import './Home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  //<img src={require('./Images/waterhome.jpg')} alt="waterhome"  />
  return (
    <div className='container'>
      <div className='intro'>
        <h1>Welcome to <strong>Aquabhi</strong></h1>
        <p>We supply best mineralised water for all your need.</p>
        <button><NavLink to='/subscription'>Get Started</NavLink></button>
      </div>
    </div>
   
  )
}

export default Home