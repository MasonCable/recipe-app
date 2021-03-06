import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()


// Store these in an env file ASAP
const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'

const reducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_SEARCH':
            return {
                ...state,
                food: action.payload
            }
            default:
                return state
    }
}

export class Provider extends Component {
    state = {
        food: [],
        protein: '',
        amount: 3,
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount(){
        axios.get(`${callLink}q=${this.state.protein}&app_id=${appId}&app_key=${apiKey}&from=0&to=${this.state.amount}&calories=591-722&health=alcohol-free`)
        .then(res => {                        
            this.setState({
                food: res.data.hits
            })
        }).catch(err => console.log(err))
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer