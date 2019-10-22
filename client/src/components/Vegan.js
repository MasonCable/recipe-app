import React,{ Component } from 'react'
import axios from 'axios'
import Spinner from '../assets/Spinner'
import HomeSearch from './HomeSearch'


const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'



class Vegan extends Component {
    state = {
        vFoods:[] 
    }

    componentDidMount() {
        axios.get(`${callLink}q='vegan'&app_id=${appId}&app_key=${apiKey}&from=0&to=10&calories=591-722`)
            .then(res => {
                console.log(res.data.hits)

                this.setState({
                    vFoods: res.data.hits
                })                
            }).catch(err => console.log(err))
    }

    render () {
         if (this.state.vFoods.length <= 0) {
            return (
                <Spinner />
            )
        } else {
            return (
                  <React.Fragment>
                  <HomeSearch />                
                <div className="container d-flex justify-content-around flex-wrap">
                    {/* <h1>Hello world this is the {this.props.match.params.id} page</h1> */}

                    {this.state.vFoods.map(item => (
                        <div className="car d-flex m-5" key={item.recipe.label} style={{width: 25 + 'em'}}>
                            <img src={item.recipe.image} style={{ width: 100 + '%' }}/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {item.recipe.label}
                                </h5>
                                <ul className="list-group list-group-flush">
                                    <div className="list-group-item"><strong>Calories</strong>: {Math.round(item.recipe.calories)}</div>
                                    <div className="list-group-item"><strong>Description</strong>: {item.recipe.dietLabels.join(', ')}</div>
                                </ul>
                            </div>
                        </div>
                    ))}
                    
                </div>
                
                </React.Fragment>
            )
        }
    }
     
}

export default Vegan