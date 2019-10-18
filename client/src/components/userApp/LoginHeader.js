import React, { Component } from 'react'
import Searchbar from '../Searchbar'

import { app } from '../../base'
import { withAuth } from '../../Authentication'
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'

class LoginHeader extends Component {

    handleClick = () => {
        this.props.signout()
        return <Redirect to='/'/>
    }
    render () {
        return (
            <div className='d-flex justify-content-between' style={{backgroundColor: '#94011c'}}>                        
                <div style={{width: 70 + '%'}}>
                    <Searchbar />
                </div>
                <div className="p-4 d-flex justify-content-between" style={{textAlign: 'center', width: 10 + 'em'}}>
                    <FontAwesomeIcon icon={faUser} color={'#fff'} size='lg' style={iconStyles}/>                         
                    <FontAwesomeIcon icon={faBell} color={'#fff'} size='lg' style={iconStyles} />
                </div>
                                      
            </div>
        )
    }
}

export default withAuth(LoginHeader)

const styles = {backgroundColor: '#94011c', color: '#fff', cursor: 'pointer', width: 10 + 'em', textAlign: 'center'}
const iconStyles = {
    cursor: 'pointer'
}