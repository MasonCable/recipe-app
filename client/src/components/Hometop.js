import React, { Component } from 'react'
import axios from 'axios'
import Threeitems from './Threeitems'
import Proteins from './Proteins'

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
                // console.log(res.data.hits)
                this.setState({
                    data: res.data.hits
                })
            }).catch(err => console.log(err))

            if(this.state.data !== undefined) {
                console.log(this.state.data)
            }
    }
    render(){
        return (
            <React.Fragment>
                <div className="header" style={{backgroundColor: '#94011c'}}>
                    <div className=" p-3">
                        <div className="d-flex justify-content-center">
                            <input placeholder='Search For Recipes...' type="text" style={styles}/>
                        </div>
                    </div>
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

const styles = {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    width: 100 + '%',
    backgroundColor: '#94011c', 
    color: '#fff'
}