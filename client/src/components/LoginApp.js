import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { app } from '../base'
import axios from 'axios'
import store from '../store'
//Components
import Home from './userApp/Home'
import LoginHeader from './userApp/LoginHeader'
import Saved from './userApp/SavedRecipes'
import FindRecipes from './userApp/FindRecipes'
import UserProfile from './userApp/UserProfile'
// Login credentials
const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'

class LoginApp extends Component {

    componentDidMount() {
        axios.get(`${callLink}q='beef'&app_id=${appId}&app_key=${apiKey}&from=0&to=4&calories=591-722`)
            .then(res => {
                console.log(res.data.hits)
                store.dispatch({
                    type: 'BUILD_RECIPES',
                    payload: res.data.hits
                })
            }).catch(err => console.log(err))
    }
   
    render () {
        return (
            <React.Fragment>                
                <LoginHeader />
                    <Switch>
                        <Route exact path="/app" component={Home} />
                        <Route exact path="/app/saved" component={Saved} />
                        <Route exact path="/app/recipes" component={FindRecipes} />
                        <Route exact path="/app/user" component={UserProfile} />
                    </Switch>
            </React.Fragment>
        )
    }
}

export default LoginApp