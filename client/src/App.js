import React from 'react'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Hometop from './components/Hometop'
import Recipes from './components/Recipes'
import Search from './components/Search'
import Vegan from './components/Vegan'
import LoginRegister from './components/LoginRegister' 
// Auth
import { AuthProvider } from './Auth'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <React.Fragment >
          <Switch>            
            <Route exact path = '/' component={Hometop} />
            <Route exact path = '/recipes/:id' component={Recipes} />            
            <Route exact path='/vegan/favorites' component={Vegan} />
            <Route exact path='/login' component={LoginRegister} />
          </Switch>
        </React.Fragment>
      </Router>
    </AuthProvider>
  )
}

export default App
