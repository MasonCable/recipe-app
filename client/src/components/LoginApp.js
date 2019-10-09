import React, { Component } from 'react'
import {app} from '../base'
import { Route, Switch } from 'react-router-dom'
import Home from './userApp/Home'
import Tester from './userApp/Tester'

class LoginApp extends Component {
    state = {
        userData: {}
    }
    componentDidMount() {
        // let user = app.auth().currentUser()
        let user = 'Test'

        console.log(user)
    }
    render () {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/app" component={Home} />
                    <Route path="/tester" component={Tester} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default LoginApp