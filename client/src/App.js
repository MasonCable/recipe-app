import React from 'react'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
//Components
import Hometop from './components/Hometop'
import Recipes from './components/Recipes'
import Search from './components/Search'
import Vegan from './components/Vegan'
import Login from './components/Login'
import LoginApp from './components/LoginApp'
import Register from './components/Register'
// Auth
import { AuthProvider } from './Auth'
import PrivateRoute from './PrivateRoute'
// Redux

import store from './store'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <React.Fragment >
          <Switch>            
            <Route exact path = '/' component={Hometop} />
            <Route exact path = '/recipes/:id' component={Recipes} />            
            <Route exact path='/vegan/favorites' component={Vegan} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Register} />
            <PrivateRoute exact path='/app/:id' component={LoginApp} />
          </Switch>
        </React.Fragment>
      </Router>
    </AuthProvider>
  )
}

export default App
