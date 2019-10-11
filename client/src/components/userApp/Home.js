import React, { Component } from 'react'
import {app} from '../../base'
import { withAuth } from '../../Authentication'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    state = {
        teams: ['Las Vegas Golden Knights', 'Minnesota Wild']
    }
    
    componentDidMount() {
        let uid = localStorage.getItem('token')
        app.database().ref(`users/${uid}`).on('value', snapshot => {
            console.log(snapshot.val())
        })
    }
    handleClick = () => {
        this.props.signout()
        return <Redirect to='/login' />
    }
    render () {
        return (
            <div className='container mt-4' style={{textAlign: 'center'}}>
                <h3>This is where shit goes</h3>
                <button onClick={this.handleClick}>Sign Out</button>
            </div>
        )
    }
}

export default withAuth(Home)