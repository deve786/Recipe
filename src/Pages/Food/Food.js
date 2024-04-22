import React, { useEffect, useState } from 'react'
import './Food.css'
import axios from 'axios'

import Accordion from './Accordion.js'
import { useParams } from 'react-router-dom'

function Food() {
    const [food, setFood] = useState([])

    const params = useParams()

    const singleData = async () => {
        const result = await axios.get(`https://dummyjson.com/recipes/${params.id}`)
        setFood(result.data);
    }
    
    useEffect(() => {
        singleData()
    }, [])

    return (
        <>
            {
                food.id ?
                    <div className='food'>
                        <div className='food-details'>
                            <div className='food-image'>
                                <img src={food.image} alt="" />
                            </div>
                            <div className='food-detail'>
                                <h2>{food.name}</h2>
                                <p>{food.rating} ⭐⭐⭐⭐⭐ </p>
                                <p >{
                                    food.tags ?
                                        <p>
                                            {food.tags.map(i => (
                                                <span className='tags'>#{[i]} </span>

                                            ))}
                                        </p>
                                        :
                                        <></>
                                }</p>
                                <Accordion title="Ingredients">{
                                    food.ingredients ?
                                        <ol itemType='1'>
                                            {food.ingredients.map(i => (
                                                <li className='ingre'>{[i]}</li>

                                            ))}
                                        </ol> :
                                        <></>
                                }</Accordion>
                                <Accordion title="Instructions">{
                                    food.instructions ?
                                        <ol itemType='1'>
                                            {food.instructions.map(i => (
                                                <li className='ingre'>{[i]}</li>

                                            ))}
                                        </ol>
                                        :
                                        <></>
                                }
                                </Accordion>

                            </div>
                        </div>
                        <div className='reviews'>
                            reviews
                        </div>
                    </div>
                    :
                    <p>Loading....</p>

            }

        </>
    )
}

export default Food