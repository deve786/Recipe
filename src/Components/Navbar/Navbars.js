import React from 'react'
import './Navbars.css'
import { Link } from 'react-router-dom'
function Navbars() {
    return (
        <div className='navbar'>
            <div className='logo'><Link to='/' style={{textDecoration:"none",color:'black',fontWeight:'bolder',fontSize:'20px'}}>ChefChirp</Link></div>
            <div className='menu'>
                <div className='item'><Link to='/' style={{textDecoration:"none",color:'black'}}>Home</Link></div>
                <div className='item'>About</div>
                <div className='item'>Recipe</div>
            </div>
            <div className='menu-prof'><i class="fa-solid fa-user"></i></div>
        </div>
    )
}

export default Navbars