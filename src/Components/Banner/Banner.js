import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <>

            <div className='banner'>
                <div className='content'>
                    <h1>Discover the Joy of Cooking with Chefchirp</h1>
                    <p>Unlock the secrets of exquisite dishes from around the world. Each recipe offers step-by-step instructions to ensure you can create delicious meals every time. Dive into a world of flavors and transform your kitchen into a chef's paradise!</p>
                </div>
                <div className='image '>
                    <img src="/banner_img.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner