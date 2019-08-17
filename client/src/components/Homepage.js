import React,{ Component } from 'react'
import { Consumer } from '../context'
import axios from 'axios'
import SingleItem from './SingleItem'

 


const Homepage = ( ) => {
     return(
            <Consumer>
               {value => {
                   const { food } = value

                //    console.log(food)

                    return (
                        
                            <div className='d-flex flex-wrap justify-content-center'>   
                                {food.map(item => (
                                    <SingleItem foodArr={item.recipe}  key={item.recipe.calories} />
                                ))}                                   
                            </div>
                        
                    )
               }}
            </Consumer>
        )
}

export default Homepage