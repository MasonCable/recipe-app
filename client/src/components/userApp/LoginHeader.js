import React, { Component } from 'react'
import SearchbarUser from './SearchbarUser'

import { app } from '../../base'
import { withAuth } from '../../Authentication'
import { Redirect, Link } from 'react-router-dom'

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

class LoginHeader extends Component {

    handleClick = () => {
        this.props.signout()
        return <Redirect to='/'/>
    }
    render () {
        return (
            <div className='d-flex justify-content-between' style={{backgroundColor: '#94011c'}}>                        
                <div style={{width: 70 + '%'}}>
                    <SearchbarUser />
                </div>
                <div className="p-4 d-flex justify-content-between" style={{textAlign: 'center', width: 10 + 'em'}}>
                   <Link to='/app/user'><FontAwesomeIcon icon={faUser} color={'#fff'} size='lg' style={iconStyles}/> </Link>                        
                    <FontAwesomeIcon icon={faBell} color={'#fff'} size='lg' style={iconStyles} />
                    <FontAwesomeIcon onClick={this.handleClick} icon={faSignOutAlt} color={'#fff'} size='lg' style={iconStyles} />
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