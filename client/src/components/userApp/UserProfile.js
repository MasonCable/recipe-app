import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UserProfile extends Component {
    state = {
        data: ''
    }
    componentDidMount() {
        this.setState({
            data: 'Hello World'
        })
    }
    render () {
        return (
            <div>
                {this.state.data}
                <Link to='/app'> <button className="btn btn-lg btn-warning">Go back</button> </Link>
            </div>
        )
    }
}

export default UserProfile