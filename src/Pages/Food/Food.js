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
                                <h1>{food.name}</h1>
                                <p className='rating'>Rating: {food.rating}  ({food.reviewCount})</p>



                                <p className='tag'>{
                                    food.tags ?
                                        <p>
                                            {food.tags.map(i => (
                                                <span className='tags'>#{[i]} </span>

                                            ))}
                                        </p>
                                        :
                                        <></>
                                }</p>

                                <div className='box-main'>
                                    <div className='box'>{food.difficulty}</div>
                                    <div className='box'>{food.cuisine}</div>
                                    <div className='box'>{food.mealType[0]}</div>
                                </div>
                                <hr />
                                {/* <div className='prep'>
                                    <div className='roundbox'>
                                        <p>{food.prepTimeMinutes}</p>
                                    </div>
                                    <div className='roundbox'>
                                        <p>{food.cookTimeMinutes}</p>
                                    </div>
                                    <div className='roundbox'>
                                        <p>{food.caloriesPerServing}</p>
                                    </div>
                                </div>
                                <div className='prep1'>

                                    <div >
                                        <p>Preparation Time</p>
                                    </div>


                                    <div >
                                        <p>Cooking Time</p>
                                    </div>
                                    <div >
                                        <p>Calories Serving</p>
                                    </div>



                                </div> */}

                                <div>
                                    <table>
                                        <tr>
                                            <td>Prepartin Time</td>
                                            <td>sd</td>
                                        </tr>
                                        <tr>
                                            <td>Cooking Time</td>
                                            <td>ss</td>
                                        </tr>
                                        <tr>
                                            <td>Calories Serving</td>
                                            <td>cs</td>
                                        </tr>
                                    </table>
                                </div>
                                <hr />
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
                    <div></div>

            }

        </>
    )
}

export default Food