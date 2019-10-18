import React, { Component } from 'react'
import Searchbar from '../Searchbar'

import { app } from '../../base'
import { withAuth } from '../../Authentication'
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

class LoginHeader extends Component {

    handleClick = () => {
        this.props.signout()
        return <Redirect to='/'/>
    }
    render () {
        return (
            <div className='header' style={{backgroundColor: '#94011c'}}>
                <Searchbar />
                {/* <div className="container d-flex justify-content-center">
                    <ul className="list-group list-group-horizontal-sm">
                        <li className="list-group-item m-4 border-bottom" style={styles}> Profie</li>
                        <li className="list-group-item m-4 border-bottom" style={styles}> Saved Recipes</li>
                        <li onClick={this.handleClick} className="list-group-item m-4 border-bottom" style={styles}> Logout</li>
                    </ul>
                </div> */}
                <FontAwesomeIcon icon={faUser} color={'#fff'} /> 
            </div>
        )
    }
}

export default withAuth(LoginHeader)

const styles = {backgroundColor: '#94011c', color: '#fff', cursor: 'pointer', width: 10 + 'em', textAlign: 'center'}