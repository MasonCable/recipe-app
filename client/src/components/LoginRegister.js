import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LoginRegister extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello World</h1>
                <h2>Lets Login</h2>
                <Link to='/' ><h3>Go back</h3></Link>
            </React.Fragment>
        )
    } 
}

export default LoginRegister