import React, { Component } from 'react'
import {app} from '../base'
import { Route, Switch } from 'react-router-dom'
//Components
import Home from './userApp/Home'
import LoginHeader from './userApp/LoginHeader'


class LoginApp extends Component {
    state = {
        userData: {}
    }
   
    render () {
        return (
            <React.Fragment>                
            <LoginHeader />
                <Switch>
                    <Route path="/app" component={Home} />
                    
                </Switch>
            </React.Fragment>
        )
    }
}

export default LoginApp