import React,{ Component } from 'react'
import axios from 'axios'
import InitialForm from './InitialForm'

const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'

class Homepage extends Component {
    state = {
        food: null    
    }

    componentDidMount(){
        axios.get(`${callLink}q=beef&app_id=${appId}&app_key=${apiKey}&from=0&to=20&calories=591-722&health=alcohol-free`)
        .then(res => {
            console.log(res.data.hits)
            this.setState({
                food: res.data
            })
        }).catch(err => console.log(err))
    }

    render(){
        return(
            <div className='container mt-4'>
        
                <InitialForm />
            </div>
        )
    }
}

export default Homepage