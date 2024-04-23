import React, { useEffect, useState } from 'react'
import './Menu.css'
import axios from'axios'
import { Link } from 'react-router-dom'
function Menu() {

  const [food, setFood] = useState([])
  const [filteredFood, setFilteredFood] = useState([]);
const fetchFood=async()=>{
  const data=await axios.get('https://dummyjson.com/recipes')
  setFood(data.data.recipes)
  setFilteredFood(data.data.recipes);
  

}
  
useEffect(() => {
 fetchFood()
}, [])

const filterFood = (mealType) => {
  const filtered = food.filter(item => item.mealType.includes(mealType));
  setFilteredFood(filtered);

};

  return (
    <>
    <h2 className='menu-head'>Our Menus</h2>
    <div className='category'>
      <button onClick={() => filterFood('Breakfast')}>Breakfast</button>
      <button onClick={() => filterFood('Lunch')}>Lunch</button>
      <button onClick={() => filterFood('Dinner')}>Dinner</button>
      
    </div>
    <div>
        
      </div>
      <div className='row'>
        
          
        
        {
          filteredFood.map(i => (
            <div>
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
                    <p>{i.mealType.join(", ")}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Menu