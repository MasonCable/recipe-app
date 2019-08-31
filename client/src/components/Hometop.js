import React, { Component } from 'react'
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
                </div>
                <Proteins />
                    </React.Fragment>
                
            
            
        )
    }
}

export default Hometop
