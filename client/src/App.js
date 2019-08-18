import React from 'react'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
// const apiKey = '028a4610ed97afff5701fd00475eb28'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment className='App'>
          <Switch>
            <Route exact path = '/' component={ Homepage } />
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
  )
}

export default App
