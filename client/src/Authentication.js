import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthService from './newAuth'

export const api = new AuthService()

const AuthContext = React.createContext({
    isAuthenticated: false,
    redirectUrl: '/login',
    defaultRedirect: '/'
})

export class Authentication extends Component {
    state = {
        isAuthenticated: api.loggedIn(),
        pageType: ''
    }

    static defaultProps = {
        redirectUrl: '/login',
        defaultRedirect: '/'
    }
    
    signin = (email, password, cb) => {
        api.login(email, password)
        .then(data => {
            this.setState({ isAuthenticated: true })
            cb()
        }).catch(err => console.log(err))
    }

    signout= () => {
        api.logout()
        this.setState({ isAuthenticated: false })
    }

    register = (email, data, cb) => {
      var {name: fullName, email: email, password: password} = data
        api.register(data)
            .then(data => {
                this.setState({ isAuthenticated: true })
                cb()
            }).catch(err => console.log(err))
        
        // console.log(email + ' ' + fullName , password)
    }

  
    render () {
        const value = {
            isAuthenticated: this.state.isAuthenticated,
            redirectUrl: this.props.redirectUrl,
            signin: this.signin,
            signout: this.signout,
            register: this.register            
        }

        return (
            <AuthContext.Provider value={value}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export const AuthRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    { ({ isAuthenticated, redirectUrl }) => (
      <Route {...rest} render={(props) => (
        isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{
            pathname: redirectUrl,
            state: { from: props.location }
          }}/>
        )
      }/>
    )}
  </AuthContext.Consumer>
)

export function withAuth(Component) {
  return props => (
    <AuthContext.Consumer>
      {context => (
        <Component {...context} {...props} />
      )}
    </AuthContext.Consumer>
  )
}