import React from 'react'
import './Banner.css'
import Navbars from '../Navbar/Navbars'
function Banner() {
    return (
       <>
            <Navbars/>
            <div className='banner'>
                <div className='content'>
                    <h1>Natural food Your Healthy Life</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro impedit eaque tempore dolor obcaecati ab aspernatur soluta quod, neque consequuntur tenetur eos eligendi, optio fuga corporis consequatur repellendus sint laudantium.</p>
                    </div>
                <div className='image'>
                    <img src="/banner_img.png" alt="" />
                </div>
            </div>
       </>
    )
}

export default Banner