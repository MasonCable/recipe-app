import React, { Component } from 'react'
import axios from 'axios'


const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'

class Search extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.match.params.id}</h1>
            </div>
        )
    }
}

export default Search