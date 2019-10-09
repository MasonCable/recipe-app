import React, { Component } from 'react'

class Home extends Component {
    render () {
        return (
            <div>
                This is the Logged In app
                <button className='btn btn-large btn-warning' onClick={() => app.auth().signOut()}>Logout</button> 
            </div>
        )
    }
}

export default Home