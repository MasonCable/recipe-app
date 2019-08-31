import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../context'

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
            axios.get(`${callLink}q=${this.state.protein}&app_id=${appId}&app_key=${apiKey}&from=0&to=10&calories=591-722&health=alcohol-free`)
                .then(res => {
                    dispatch({
                        type: 'CHANGE_SEARCH',
                        payload: res.data.hits
                    })
                }).catch(err => console.log(err))
                
        }
    render(){
        return (
           <Consumer>
            {value => {
                const { dispatch } = value

                return (
                    <div className=" p-3">
                        <form className="d-flex justify-content-center" onSubmit={this.handleSubmit.bind(this, dispatch)}>
                            <input placeholder='Search By Keyword...' 
                                type="text" 
                                value={this.state.foodVal}
                                style={styles}
                                name='foodVal'
                                onChange={this.handleChange.bind(this)}
                                />
                                <button className="btn btn-primary " type="submit">
                                    Search
                                </button>
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