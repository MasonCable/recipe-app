import React, { Component } from 'react'
import {app} from '../base'
import { Route, Switch } from 'react-router-dom'
//Components
import Home from './userApp/Home'
import Tester from './userApp/Tester'
import LoginHeader from './userApp/LoginHeader'


class LoginApp extends Component {
    state = {
        userData: {}
    }
    componentDidMount() {
        
    }
    render () {
        return (
            <React.Fragment>                
            <LoginHeader />
                <Switch>
                    <Route path="/app" component={Home} />
                    <Route path="/tester" component={Tester} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default LoginApp