import React from 'react'
import './Menu.css'
function Menu() {
  return (
    <div className='card'>
        <div className='card_image'>
            <img src="/briyani.jpg" alt="" />
        </div>
        
        <div className='details'>
            <h3>Briyani</h3>
            <h5>⭐⭐⭐⭐⭐</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='card_btm'>
            <p>120$</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Menu