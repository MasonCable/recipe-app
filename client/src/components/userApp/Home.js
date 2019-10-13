import React, { Component } from 'react'
import {app, db} from '../../base'
import { withAuth } from '../../Authentication'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    state = {
        userData: {},
        recipes: {},
        token: localStorage.getItem('token')
    }
    
    componentDidMount() {
        let uid = localStorage.getItem('token')
    
        db.collection(`user${uid}`).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    console.log(doc.data())
                    this.setState({
                        userData: doc.data(),
                        recipes: doc.data().recipes
                    })
                })
            })
    }
   
    handleClick = () => {
        this.props.signout()
        return <Redirect to='/login' />
    }

    addStuff = () => {
        db.collection(`user${this.token}`).add({
            recipes: ['tits']
        }, { merge: true })
    }
    
    render () {
        
       if (this.state.recipes === {}) {
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
                    </div>
                </div>
            </div>
        )
       }
    }
}

export default withAuth(Home)