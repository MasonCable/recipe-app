import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../context'
import { Redirect, Link } from 'react-router-dom'

const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'

class Searchbar extends Component {
     state = {
            foodVal: ''
        }

        handleChange = (e) => {        
            this.setState({
                foodVal : e.target.value
            })
        }

        handleSubmit = (dispatch, e) => {
            e.preventDefault()
            
                return <Redirect to={`/search/${this.state.foodVal}`} />
        }
    render(){
        return (
           <Consumer>
            {value => {
                const { dispatch } = value

                return (
                    <div className=" p-3">
                        <form className="d-flex justify-content-center" onSubmit={this.handleSubmit.bind(this)}>
                            <input placeholder='Search By Keyword...' 
                                type="text" 
                                value={this.state.foodVal}
                                style={styles}
                                name='foodVal'
                                onChange={this.handleChange.bind(this)}
                                />
                                <Link to={`/recipes/${this.state.foodVal}`} style={{marginLeft: -5 + 'em'}} >
                                    <button className="btn border-top hoverBtn" type="submit" >                                        
                                        Search
                                    </button>
                                </Link>
                        </form>
                    </div>
                )
            }}
           </Consumer>
        )
    }
}

export default Searchbar


const styles = {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    width: 100 + '%',
    backgroundColor: '#94011c', 
    color: '#fff'
}