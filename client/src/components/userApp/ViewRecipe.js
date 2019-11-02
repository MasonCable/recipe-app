import React, { Component } from 'react'
import { withAuth } from '../../Authentication'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'


class ViewRecipe extends Component {
    state = {
        title: this.props.label,
        ingredientsQuantity: [],
        ingredientsFood: [],
        test: undefined
    }
    
    render () {
        if (this.props.viewRecipe.label === undefined) {
            return (
                <Redirect to='/app' />
            )
        } else {
            return (
                <div className='container' >
                <Link to='/app'> <button className="btn btn-lg btn-primary" style={{width: 100 + '%'}}>Back</button></Link>
                    <h1 className='border-bottom'>Title</h1>
                    <span >{this.props.viewRecipe.label}</span>

                    <h1 className='border-bottom'>Ingredients</h1>
                    <span >
                         {this.props.viewRecipe.ingredients.map(item => (
                            <p key={item.text}>{ item.text }</p>
                        ))}
                    </span>
                   
                </div>
            )
        }
    }
}

function mapStateToProps(appState) {
    return {
        viewRecipe: appState.testReducer1.viewRecipe
    }
}

export default connect(mapStateToProps)(ViewRecipe)