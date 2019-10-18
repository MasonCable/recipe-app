import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import store from '../../store'


const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'

class SearchbarUser extends Component {
     state = {
            foodVal: '',
            btnVal: ''
        }

        handleChange = (e) => {        
            this.setState({
                foodVal : e.target.value
            })
        }

        handleSubmit = (e) => {
            if (this.state.foodVal === '') {
                e.preventDefault()
                alert('Fill not a valid string')
            } else {
                e.preventDefault()
                axios.get(`${callLink}q='${this.state.foodVal}'&app_id=${appId}&app_key=${apiKey}&from=0&to=4&calories=591-722`)
                    .then(res => {
                        store.dispatch({
                            type: 'BUILD_RECIPES',
                            payload: res.data.hits
                        })
                    })
            }
        
        }
    render(){
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
                        <button onClick={this.handleSubmit} className="btn border-top hoverBtn" type="submit" style={{color: '#fff', marginLeft: '-' + 4 + '.' + 8 + 'em'}} >                                        
                            Search
                        </button>
                </form>
            </div>
        )
    }
}

export default SearchbarUser


const styles = {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    width: 100 + '%',
    backgroundColor: '#94011c', 
    color: '#fff'
}