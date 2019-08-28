import React from 'react'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Hometop from './components/Hometop'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment >
          <Switch>
            {/* <Route exact path = '/' component={ Homepage } /> */}
            <Route exact path = '/' component={Hometop} />
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
  )
}

export default App
