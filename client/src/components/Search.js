import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'


class Search extends Component {
    state = {
        foods: [],
        resultAmt: null
    }
    componentDidMount() {
        axios.get(`${callLink}q=${this.props.match.params.id}&app_id=${appId}&app_key=${apiKey}&from=0&to=10&calories=591-722&health=alcohol-free`)
            .then(res => {
                console.log(res.data.hits)            
                this.setState({
                    foods: res.data.hits,
                    resultAmt: res.data.hits.length
                })
            })
    }
    render(){
        return (
            <div>
                <Link to='/'>
                    <button className="btn-primart btn">Back</button>
                </Link>
                <h1>{this.props.match.params.id}</h1>
            </div>
        )
    }
}


export default Search