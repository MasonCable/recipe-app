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
                        <React.Fragment>
                            <div className="md-form  p-3">
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                                <div className="input-group-append">
                                    <span className="input-group-text red lighten-3" id="basic-text1"><i className="fas fa-search text-grey"
                                    aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className='d-flex flex-wrap justify-content-center'>   
                                {food.map(item => (
                                    <SingleItem foodArr={item.recipe}  key={item.recipe.calories} />
                                ))}                                   
                            </div>
                        </React.Fragment>
                    )
               }}
            </Consumer>
        )
}

export default Homepage