import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { app } from '../base'
//Components
import Home from './userApp/Home'
import LoginHeader from './userApp/LoginHeader'
import Saved from './userApp/SavedRecipes'
import FindRecipes from './userApp/FindRecipes'

class LoginApp extends Component {
   componentDidMount() {
       let uid = localStorage.getItem('token')
        app.database().ref(`users/${uid}`).on('value', snapshot => {
            console.log(snapshot.val())
        })
   }
    render () {
        return (
            <React.Fragment>                
                <LoginHeader />
                    <Switch>
                        <Route exact path="/app" component={Home} />
                        <Route exact path="/app/saved" component={Saved} />
                        <Route exact path="/app/recipes" component={FindRecipes} />
                    </Switch>
            </React.Fragment>
        )
    }
}

export default LoginApp