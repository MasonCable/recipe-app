import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Threeitems from './Threeitems'
import Proteins from './Proteins'
import Searchbar from './Searchbar' 
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
        axios.get(`${callLink}q=${this.state.protein}&app_id=${appId}&app_key=${apiKey}&from=0&to=${this.state.amount}&calories=591-722&health=alcohol-free`)
            .then(res => {            
                this.setState({
                    data: res.data.hits
                })
            }).catch(err => console.log(err))
            
    }
    render(){
        return (
            <React.Fragment>
                <div className="header" style={{backgroundColor: '#94011c'}}>
                    <Searchbar />
                        <div >
                            <div className="d-flex justify-content-around p-3">
                                {this.state.data.map(item => (
                                    <Threeitems foodArr={item.recipe} key={item.recipe.url} />
                                ))}
                            </div>
                        </div>
                        {/*This will be the are where the menu is -> on mobile this will be a dropdown*/}
                        <div className="container d-flex justify-content-center">
                            <ul className="list-group list-group-horizontal-sm" >
                                 <Link to='/' ><li className="list-group-item m-4 border-bottom" style={{backgroundColor: '#94011c', color: '#fff', cursor: 'pointer'}}>Home</li> </Link>
                                 <li className="list-group-item m-4 border-bottom" style={{backgroundColor: '#94011c', color: '#fff', cursor: 'pointer'}}>Login/Register</li>
                                <li className="list-group-item m-4 border-bottom" style={{backgroundColor: '#94011c', color: '#fff', cursor: 'pointer'}}>Choose by region</li>
                                 <Link to='/vegan/favorites'><li className="list-group-item m-4 border-bottom" style={{backgroundColor: '#94011c', color: '#fff', cursor: 'pointer'}}>Vegan Favorites</li></Link>
                            </ul>
                        </div>
                </div>
                <Proteins />
                    </React.Fragment>
                
            
            
        )
    }
}

export default Hometop
