import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../context.js'

const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'

class Search extends Component {
    state = {
        userInput: '',
        amount: '10'
    }

    onChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    changeProtein = (dispatch, e) => {
        e.preventDefault()
    
        
    
            dispatch({
                type: 'CHANGE_PROTEIN',
                paylaod: this.state.userInput
            })
        
            
    }
    render(){
        return ( 
            <Consumer>
              {value => {
                  const { dispatch } = value

                  return (
                    <form onSubmit={this.changeProtein.bind(this, dispatch)}>
                        <div className="form-group">
                            <input type="text" 
                                className="form-control lg"
                                placeholder="Protein..."
                                name="userInput"
                                value={this.state.userInput}
                                onChange={this.onChange.bind(this)}
                                    />
                        </div>
                        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
                            Search
                        </button>
                    </form>
                  )
              }}
            </Consumer>
        )
    }
}

export default Search