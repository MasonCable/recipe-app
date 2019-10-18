import React, { Component } from 'react'

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
            </div>
        )
    }
}

export default UserProfile