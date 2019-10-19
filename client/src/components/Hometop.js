import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { app } from '../base'
//Components
import Proteins from './Proteins'
import Searchbar from './Searchbar' 


// Make sure the following consts are moved to an .env file
const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'



class Hometop extends Component {
    state = {
        protein: '',
        amount: 3,
        data: []
    }

    componentDidMount() {
        // Make sure to get rid of the alcohol free parameter
        // axios.get(`${callLink}q=${this.state.protein}&app_id=${appId}&app_key=${apiKey}&from=0&to=${this.state.amount}&calories=591-722&health=alcohol-free`)
        //     .then(res => {            
        //         this.setState({
        //             data: res.data.hits
        //         })
        //     }).catch(err => console.log(err))
    }
    render(){
           return (
            <React.Fragment>
                <div className="header" style={{backgroundColor: '#94011c'}}>
                    <Searchbar />        
                        {/*This will be the are where the menu is -> on mobile this will be a dropdown*/}
                        <div className="container d-flex justify-content-center">
                            <ul className="list-group list-group-horizontal-sm" >
                                 <Link to='/' ><li className="list-group-item m-4 border-bottom" style={styles}>Home</li></Link>
                                 <Link to='/vegan/favorites'><li className="list-group-item m-4 border-bottom" style={styles}>Vegan Favorites</li></Link>
                                 <Link to="/login"><li className="list-group-item m-4 border-bottom" style={styles}>Login/Register</li></Link>
                                    {/* Add these when the routes are built */}
                                 
                            </ul>
                        </div>
                </div>
                <Proteins />
            </React.Fragment>
        )
       
    }
}

export default Hometop

const styles = {backgroundColor: '#94011c', color: '#fff', cursor: 'pointer', width: 10 + 'em', textAlign: 'center'}
