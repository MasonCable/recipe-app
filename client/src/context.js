import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()


// Store these in an env file ASAP
const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'

const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_CHANGE':
            return {
                ...state,
                food: action.payload
            }
        case 'CHANGE_PROTEIN':
            return {
                ...state,
                protein: action.payload
            }
            default:
                return state
    }
}

export class Provider extends Component {
    state = {
        food: [],
        protein: 'pork',
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount(){
        axios.get(`${callLink}q=${this.state.protein}&app_id=${appId}&app_key=${apiKey}&from=0&to=20&calories=591-722&health=alcohol-free`)
        .then(res => {            
            console.log(res.data.hits)
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