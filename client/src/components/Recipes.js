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
                <React.Fragment>
                <Link to='/'>Go Back</Link>
                <div className="container d-flex justify-content-around flex-wrap">
                    {recipes.map(item => (
                        <div className="car d-flex m-5" key={item.recipe.label} style={{width: 25 + 'em'}}>
                            <img src={item.recipe.image} style={{ width: 100 + '%' }}/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {item.recipe.label}
                                </h5>
                                <ul className="list-group list-group-flush">
                                    <div className="list-group-item"><strong>Calories</strong>: {Math.round(item.recipe.calories)}</div>
                                    <div className="list-group-item"><strong>Description</strong>: {item.recipe.dietLabels.join(', ')}</div>
                                </ul>
                            </div>
                        </div>
                    ))}
                    
                </div>
                
                </React.Fragment>
            )   
        }
  }
}

export default Recipes