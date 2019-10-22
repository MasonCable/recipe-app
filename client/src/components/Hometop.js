import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { app } from '../base'
//Components
import Proteins from './Proteins'
import Searchbar from './Searchbar'
// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'



// Make sure the following consts are moved to an .env file
const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'



class Hometop extends Component {
    render(){
           return (
            <React.Fragment>
                <div className="d-flex justify-content-between" style={{backgroundColor: '#94011c'}}>        
                    <div style={{ width: 65 + '%' }}>
                        <Searchbar />
                    </div>                        
                        <div className="p-4 d-flex justify-content-between" style={{textAlign: 'center', width: 9 + 'em'}}>
                            <Link to='/home'><FontAwesomeIcon icon={faHome} color={'#fff'} size='lg' style={iconStyles} /></Link>
                            <Link to='/vegan/favorites'><FontAwesomeIcon icon={faSeedling} color={'#fff'} size='lg' style={iconStyles} /></Link>
                            <Link to='/login'><FontAwesomeIcon icon={faSignInAlt} color={'#fff'} size='lg' style={iconStyles} /></Link>
                        </div>
                </div>
                <Proteins />
            </React.Fragment>
        )
       
    }
}

export default Hometop

const styles = {backgroundColor: '#94011c', color: '#fff', cursor: 'pointer', width: 10 + 'em', textAlign: 'center'}
const iconStyles = { cursor: 'pointer' }
