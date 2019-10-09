import React, { Component } from 'react'
import Searchbar from '../Searchbar'

class LoginHeader extends Component {
    render () {
        return (
            <div className='header' style={{backgroundColor: '#94011c'}}>
                <Searchbar />
                <div className="container d-flex justify-content-center">
                    <ul className="list-group list-group-horizontal-sm">
                        <li className="list-group-item m-4 border-bottom" style={styles}> Profie</li>
                        <li className="list-group-item m-4 border-bottom" style={styles}> Saved Recipes</li>
                        <li className="list-group-item m-4 border-bottom" style={styles}> Logout</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default LoginHeader

const styles = {backgroundColor: '#94011c', color: '#fff', cursor: 'pointer', width: 10 + 'em', textAlign: 'center'}