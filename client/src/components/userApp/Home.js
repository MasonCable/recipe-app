import React, { Component } from 'react'
import {app} from '../../base'
import { withAuth } from '../../Authentication'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    state = {
        teams: ['Las Vegas Golden Knights', 'Minnesota Wild']
    }
    
    componentDidMount() {
        
    }
    handleClick = () => {
        this.props.signout()
        return <Redirect to='/login' />
    }
    render () {
        return (
            <div className='container mt-4' style={{textAlign: 'center'}}>
                <div className="container" style={{backgroundColor: 'grey'}}>
                    <div className="container d-flex justify-content-center">
                        <h1>Search for recipes</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default withAuth(Home)