import React from 'react'
import './Services.css'
import water from './Images/water-tankers.png'

const Services = () => {
  return (
    <div className='services-container'>
      <div className="services-heading"><h1>Our Services</h1></div>
      <div className="item-1">
        <div className="item-1-para"><p>Yeh Paani ka Tanker hai, isme 5000ltr paani att ta hai.
          Ghar ke Tanki ka paani khatam ho gya ho to humey call kro.
        </p>
        </div>
        <div className="item-1-img"><img src={water} alt="Water Tanker"  /></div>
      </div>

     
    </div>
  )
}

export default Services
