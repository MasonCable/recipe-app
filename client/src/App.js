import React from 'react'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Hometop from './components/Hometop'
import Recipes from './components/Recipes'
import Search from './components/Search'

import Vegan from './components/Vegan'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment >
          <Switch>            
            <Route exact path = '/' component={Hometop} />
            <Route exact path = '/recipes/:id' component={Recipes} />
            {/* <Route exact path = '/search/:id' component={Search} /> */}
            <Route exact path='/vegan/favorites' component={Vegan} />
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
  )
}

export default App
