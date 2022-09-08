import React from 'react'
import './Images/waterhome.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className='img-container'><img src={require('./Images/waterhome.jpg')} alt="waterhome"  /></div>
   
  )
}

export default Home