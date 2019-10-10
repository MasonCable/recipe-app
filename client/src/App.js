// import React from 'react'
// import Homepage from './components/Homepage'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Provider } from './context'
// //Components
// import Hometop from './components/Hometop'
// import Recipes from './components/Recipes'
// import Vegan from './components/Vegan'
// import Login from './components/Login'
// import LoginApp from './components/LoginApp'
// import Register from './components/Register'
// // Auth
// import { AuthProvider } from './Auth'
// import PrivateRoute from './PrivateRoute'

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <React.Fragment >
//           <Switch>            
//             <Route exact path = '/' component={Hometop} />
//             <Route exact path = '/recipes/:id' component={Recipes} />            
//             <Route exact path='/vegan/favorites' component={Vegan} />
//             <Route exact path='/login' component={Login} />
//             <Route exact path='/signup' component={Register} />
//             {/* Change this to a PrivateRoute after development */}
//             <PrivateRoute exact path='/app' component={LoginApp} />  
//           </Switch>
//         </React.Fragment>
//       </Router>
//     </AuthProvider>
//   )
// }

// export default App

//THE FOLLOWING CODE WORKS BETTER, WORK ON THIS LATER!!

import React, { Component } from 'react'
import { Authentication, AuthRoute } from './Authentication'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
//Components
import Hometop from './components/Hometop'
import Recipes from './components/Recipes'
import Vegan from './components/Vegan'
import Login from './components/Login'
import LoginApp from './components/LoginApp'
import Register from './components/Register'


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
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Register} />
          <AuthRoute path='/app' component={LoginApp} />
        </div>
      </Authentication>
    </Router>
  </React.Fragment>
)


export default App