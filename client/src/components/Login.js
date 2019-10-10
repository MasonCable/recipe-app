import React, { useCallback, useContext, useState } from 'react'
import { withRouter, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import {app} from '../base'
import { AuthContext } from '../Auth.js'
import sha512 from 'js-sha512'

const Login = ({history}) => {

    const [ usrLink, setLink ] = useState( '' )

    const handleLogin = useCallback(
        async e => {
            e.preventDefault()
            const { email, password } = e.target.elements
            
            try 
            {
             await 
                // Line 25 sets the sha512 token to the useLink state
              setLink(sha512(email.value).toString())
              app.auth().signInWithEmailAndPassword(email.value, password.value)              
              localStorage.setItem('token', sha512(email.value).toString())
              history.push(`/app`)
            }
             catch (err) 
            {
                alert(err)
            } 

            
        },
        [history]
        
    )

    

    return(
     
        <div className="container">        
            <div className="">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h3 className="card-title text-center">Login</h3>
                            <form onSubmit={handleLogin} className="form-signin border-bottom border-dark pb-4" >
                                <div className="form-label-group mb-4">
                                    <input type="email" name='email' className='form-control' placeholder='Email Address' />
                                </div>
                                <div className="form-label-group mb-4">
                                    <input type="password" name='password' className='form-control' placeholder='Password' />
                                    
                                </div>
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                            </form>
                            <div className='mt-4'>
                                <h5 style={{textAlign: 'center'}}>OR</h5>
                                <Link to='/signup'><button className="btn btn-lg btn-warning btn-block text-uppercase" type="submit">Sign Up</button> </Link>
                                <Link to='/'><button className="btn btn-dark btn-lg btn-block mt-3">Go Home</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)
