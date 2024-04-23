import React from 'react'
import './Navbars.css'
import { Link } from 'react-router-dom'
function Navbars() {
    return (
        <div className='navbar'>
            <div className='logo'><Link to='/' style={{textDecoration:"none",color:'black',fontWeight:'bold'}}>ChefChirp</Link></div>
            <div className='menu'>
                <div className='item'>Home</div>
                <div className='item'>About</div>
                <div className='item'>Recipe</div>
            </div>
            <div className='menu-prof'>Profile</div>
        </div>
    )
}

export default Navbars