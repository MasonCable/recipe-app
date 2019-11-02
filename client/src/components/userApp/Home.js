import React, { Component } from 'react'
import axios from 'axios'
import {db} from '../../base'
import { connect } from 'react-redux'
import { withAuth } from '../../Authentication'
import { Redirect, Link } from 'react-router-dom'
import store from '../../store'
// Components
import Spinner from '../../assets/Spinner'
import DishTypes from './DishTypes'
// API keys
const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'

class Home extends Component {
    state = {
        userData: {},
        recipes: {},
        userRecipes: ['Turkey', 'cheese', 'Turtle stew'],
        token: localStorage.getItem('token'),
        drinks: []
    }
    
    componentDidMount() {
        let uid = localStorage.getItem('token')
    
        // db.collection(`user${uid}`).get()
        //     .then(querySnapshot => {
        //         querySnapshot.forEach(doc => {
        //             // console.log(doc.data())
        //             this.setState({
        //                 userData: doc.data(),
        //                 recipes: doc.data().recipes
        //             })
        //         })
        //     })

        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarit')
            .then(res => {
                console.log(res.data.drinks)
                this.setState({
                    drinks: res.data.drinks
                })
            })
    }
   
    handleClick = (data) => {
        store.dispatch({
            type: 'VIEW_RECIPE',
            payload: data
        })
    }

    addStuff = () => {
        // This works
        // 1.) Make sure you pass the doc() paramter with the propeer data
        // 2.) Make sure after the argument we add { merge: true }        
        db.collection(`user${this.state.token}`).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    console.log(doc.data())
                })
            })
    }
    // The Following function takes the string value and shortens it if needed
    text_truncate = (str, length, ending) => {
        if (length == null) {
        length = 100
        }
        if (ending == null) {
        ending = '...'
        }
        if (str.length > length) {
        return str.substring(0, length - ending.length) + ending
        } else {
        return str
        }
  }
    
    render () {
        if (this.props.recipes.length === 0) {
            return (
                 <div className="container" style={{textAlign: 'center', marginTop: 3 + '%'}}> 
                    {/* <Spinner /> */}                 
                 </div>
            )
            // This should be put into the else return
        } else {
            return (
                <div style={{textAlign: 'center'}}> 
                    <h4>Dish Types</h4>                                   
                    <div className="container mt-3 d-flex justify-content-center flex-wrap"  >                    
                        {this.props.recipes.map(item => (
                            <div className="box m-2 border-bottom pb-2" style={{textAlign: 'center'}} key={item.recipe.uri}>
                                <img src={item.recipe.image} alt={item.recipe.label} style={{ width: 16 + 'rem' }} />
                                <h3>{this.text_truncate(item.recipe.label, 20)}</h3>
                                <div className="d-flex flex-column">
                                    <Link to='/app/recipe'><button onClick={this.handleClick(item.recipe)}  className="btn btn-sm btn-warning mb-2">View Recipe</button></Link>
                                    <Link to='/app'> <button onClick={() => console.log(item.recipe)} className="btn btn-sm btn-primary">Add to Favorites</button></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="container mt-3 d-flex justify-content-center flex-wrap"  >                    
                        {this.state.drinks.map(item => (
                            <div className="box m-2 border-bottom pb-2" style={{textAlign: 'center'}} key={item.idDrink}>
                                <img src={item.strDrinkThumb} alt={item.strDrink} style={{ width: 16 + 'rem' }} />
                                <h3>{this.text_truncate(item.strDrink, 20)}</h3>
                                <div className="d-flex flex-column">
                                    <Link to='/app/recipe'><button onClick={this.handleClick(item.recipe)}  className="btn btn-sm btn-warning mb-2">View Recipe</button></Link>
                                    <Link to='/app'> <button onClick={() => console.log(item.recipe)} className="btn btn-sm btn-primary">Add to Favorites</button></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(appState) {
    return {
        recipes: appState.testReducer1.recipes,
        dRecipes: appState.testReducer1.dRecipes
    }
}

export default withAuth(connect(mapStateToProps)(Home))