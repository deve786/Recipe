import React, { useEffect, useState } from 'react'
import './Menu.css'
import axios from'axios'
import { Link } from 'react-router-dom'
function Menu() {

  const [food, setFood] = useState([])
const fetchFood=async()=>{
  const data=await axios.get('https://dummyjson.com/recipes')
  setFood(data.data.recipes)
  console.log(data.data.recipes);
}
  
useEffect(() => {
 fetchFood()
}, [])

  return (
    <div className='row'>
      {
        food.map(i => (
          <Link to={`food/${i.id}`} style={{textDecoration:"none",color:'black'}}>
            <div className='card'>
              <div className='card_image'>
                <img src={i.image} alt="" />
              </div>
  
              <div className='details'>
                <h3>{i.name}</h3>
                <h5>⭐⭐⭐⭐⭐</h5>
                
              </div>
              <div className='card_btm'>
                <p>{i.cuisine}</p>
                <p>{i.mealType}</p>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Menu