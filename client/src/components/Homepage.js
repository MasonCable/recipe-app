import React,{ Component } from 'react'
import { Consumer } from '../context'
import SingleItem from './SingleItem'
import Spinner from '../assets/Spinner'
import axios from 'axios'
import Search from './Search'

 

const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'


class Homepage extends Component {
   
    render(){
        return(
                <Consumer>
                {value => {
                    const { food } = value

                    //    console.log(food)
                        if(food === undefined){
                            return (<Spinner />)
                        } else {
                            return (
                            <React.Fragment>
                                {/* <div className="md-form  p-3">
                                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={handleChange}/>
                                </div> */}
                                <Search />
                                <div className='d-flex flex-wrap justify-content-center'>   
                                    {food.map(item => (
                                        <SingleItem foodArr={item.recipe}  key={item.recipe.url} />
                                    ))}                                   
                                </div>
                            </React.Fragment>
                        )
                        }
                        
                }}
                </Consumer>
        )
    }
}

export default Homepage