import React, { Component } from 'react'
import {app, db} from '../../base'
import { connect } from 'react-redux'
import { withAuth } from '../../Authentication'
import { Redirect } from 'react-router-dom'
// Components
import Spinner from '../../assets/Spinner'

class Home extends Component {
    state = {
        userData: {},
        recipes: {},
        userRecipes: ['Turkey', 'cheese', 'Turtle stew'],
        token: localStorage.getItem('token')
    }
    
    componentDidMount() {
        let uid = localStorage.getItem('token')
    
        db.collection(`user${uid}`).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    // console.log(doc.data())
                    this.setState({
                        userData: doc.data(),
                        recipes: doc.data().recipes
                    })
                })
            })
    }
   
    handleClick = () => {
        this.props.signout()
        return <Redirect to='/login' />
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
    
    render () {
        if (this.props.recipes.length === 0) {
            return (
                <div className="container" style={{textAlign: 'center', marginTop: 3 + '%'}}>
                    <Spinner />
                </div>
            )
        } else {
            return (
                <div style={{textAlign: 'center'}}>
                    <h4 style={{fontWeigth: 'bold', fontSize: '5rem'}}>Popular Recipes</h4>
                    <div className="container mt-3 d-flex justify-content-between flex-wrap" >                    
                        {this.props.recipes.map(item => (
                            <div className="box m-2 border" style={{textAlign: 'center'}} key={item.recipe.label}>
                                <h3>{item.recipe.label}</h3>
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
        recipes: appState.testReducer1.recipes
    }
}

export default withAuth(connect(mapStateToProps)(Home))