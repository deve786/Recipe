import React from 'react'
import './Navbars.css'
function Navbars() {
    return (
        <div className='navbar'>
            <div>ChefChirp</div>
            <div className='menu'>
                <div className='item'>Home</div>
                <div className='item'>About</div>
                <div className='item'>Recipe</div>
            </div>
            <div>Profile</div>
        </div>
    )
}

export default Navbars