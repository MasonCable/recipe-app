import React, { Component } from 'react'
import { Authentication, AuthRoute } from './Authentication'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
//Components
import Hometop from './components/Hometop'
import Recipes from './components/Recipes'
import Vegan from './components/Vegan'
import Login from './components/Login'
import LoginApp from './components/LoginApp'
import Signup from './components/Register'



const App = props => (
  <React.Fragment>
  
    <Router>
      <Authentication
        redirectUrl='/'
        defaultRedirect='/'
      >
        <div>
          <Route exact path='/' render={() => (
            <Redirect to='/home' />
          )} />
          
          <Route exact path='/home' component={Hometop} />
          <Route exact path = '/recipes/:id' component={Recipes} />            
          <Route exact path='/vegan/favorites' component={Vegan} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <AuthRoute path='/app' component={LoginApp} />
        </div>
      </Authentication>
    </Router>
  </React.Fragment>
)


export default App