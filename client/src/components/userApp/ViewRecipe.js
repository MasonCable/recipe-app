import React, { Component } from 'react'
import { withAuth } from '../../Authentication'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class ViewRecipe extends Component {
    state = {
        title: this.props.label,
        ingredientsQuantity: [],
        ingredientsFood: []
    }
    componentDidMount() {
            this.setState({
              ingredientsFood: this.props.viewRecipe.ingredients  
            })
    }
    render () {
        if (this.props.viewRecipe.label === undefined) {
            return (
                <Redirect to='/app' />
            )
        } else {
            return (
                <div className='container' >
                    {this.props.viewRecipe.label}
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