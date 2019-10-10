import React, { Component } from 'react'
import {app} from '../../base'

class Home extends Component {

    componentDidMount() {
        let uid = localStorage.getItem('token')
        console.log(uid)

    }
    render () {
        return (
            <div className='container mt-4' style={{textAlign: 'center'}}>
                <h3>This is where shit goes</h3>
                <button onClick={() => app.auth().signOut() && localStorage.clear()}>Sign Out</button>
            </div>
        )
    }
}

export default Home