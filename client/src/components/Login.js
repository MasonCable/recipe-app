import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { Redirect, Link } from 'react-router-dom'
import { api } from '../Authentication'

class Login extends Component {
    state = {
		email: '',
		password: '',
		redirect: false,
		redirectTo: '',
		validateEmail: true
	}

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = e.target.elements

        if (email.value !== '' && password !== '') {
            this.props.signin(email.value, password.value, () => {
                this.setState({
                    redirect: true,
                    redirectTo: '/app'
                })
            })
        } else {
            alert('Incorrect')
        }

    }
    render(){
        let { redirect, redirectTo } = this.state
        if (redirect) {
            return <Redirect to={redirectTo} />
        } else {
            return (
                <div className="container">        
                    <div className="">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h3 className="card-title text-center">Login</h3>
                                    <form onSubmit={this.handleSubmit} className="form-signin border-bottom border-dark pb-4" >
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
    }
}


export default withAuth(Login)