import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../assets/Spinner'
import axios from 'axios'



const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'

class Recipes extends Component{
    state = {
        recipes: [],
        amount: 10
    }
    componentDidMount() {
        axios.get(`${callLink}q=${this.props.match.params.id}&app_id=${appId}&app_key=${apiKey}&from=0&to=${this.state.amount}&calories=591-722&health=alcohol-free`)
            .then(res => {
                console.log(res.data.hits)

                this.setState({
                    recipes: res.data.hits
                })
            }).catch(err => console.log(err))
    }
  render(){
    const { recipes } = this.state
        if(recipes.length === 0){
           return (<Spinner />) 
        }else {
            return (
                <div className="container">
                    {/* <h1>Hello world this is the {this.props.match.params.id} page</h1> */}

                    {recipes.map(item => (
                        <h1 key={item.recipe.label}> {item.recipe.label}</h1>
                    ))}
                    <Link to='/'>Go Back</Link>
                </div>
            )   
        }
  }
}

export default Recipes