import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Menu from '../../Components/Menu/Menu'

import './Home.css'
function Home() {
  return (
    <div>
        <Banner/>
        <div className='cards'><Menu /></div>
      
    </div>
  )
}

export default Home