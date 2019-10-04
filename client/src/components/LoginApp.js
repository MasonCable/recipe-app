import React, { Component } from 'react'
import {app} from '../base'

class LoginApp extends Component {
    render () {
        return (
            <React.Fragment>
                <h1>This is the account page</h1>
                <button className='btn btn-large btn-warning' onClick={() => app.auth().signOut()}>Logout</button>
            </React.Fragment>
        )
    }
}

export default LoginApp