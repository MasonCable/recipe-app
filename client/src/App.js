import React from 'react'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Hometop from './components/Hometop'
import Recipes from './components/Recipes'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment >
          <Switch>            
            <Route exact path = '/' component={Hometop} />
            <Route exact path = '/recipes/:id' component={Recipes} />
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
  )
}

export default App
