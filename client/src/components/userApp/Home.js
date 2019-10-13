import React, { Component } from 'react'
import {app, db} from '../../base'
import { withAuth } from '../../Authentication'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    state = {
        userData: {},
        recipes: [],
        token: localStorage.getItem('token')
    }
    
    componentDidMount() {
        let uid = localStorage.getItem('token')
        app.database().ref(`users/${uid}`).on('value', snapshot => {
            this.setState({
                userData: snapshot.val(),
                recipes: snapshot.val().recipes
            })
        })
    }
   
    handleClick = () => {
        this.props.signout()
        return <Redirect to='/login' />
    }

    addStuff = () => {
        app.database().ref('users/' + this.state.token).set({            
            recipes: [this.state.recipes].push('tits')
        })
    }
    
    render () {
        
       if (this.state.recipes.length <= 1) {
           return (
               <div>
                    Give user option to add new recipes
                    <button onClick={this.addStuff}>Add Items to your recipes</button>
               </div>
           )
       } else {
            return (
            <div className='container mt-4' style={{textAlign: 'center'}}>
                <div className="container" style={{backgroundColor: 'grey'}}>
                    <div className="container d-flex justify-content-center">
                        <h1>Search for recipes</h1>
                        <button>Add Items to your recipes</button>
                    </div>
                </div>
            </div>
        )
       }
    }
}

export default withAuth(Home)