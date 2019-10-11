import React, { Component } from 'react'
import { api, withAuth } from '../Authentication'
import { Link, Redirect } from 'react-router-dom'

class Signup extends Component {
    state = {
		redirect: false,
		redirectTo: ''
    }

    handleSignup = (e) => {
        e.preventDefault()
        const { email, password, emailConfirm, fullName } = e.target.elements
        let data = {
            email: email.value,
            password: password.value,
            name: fullName.value
        }
        if (email.value !== '' && password.value !== '') {
            this.props.register(email.value, data, () => {
                //Make sure when You register this relocates to a form instead of /app
                this.setState({
                    redirect: true,
                    redirectTo: '/app'
                })
            })
        } else {
            alert('Incorrect')
        }
    }
    render () {
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
                                    <h3 className="card-title text-center">Create an Account</h3>

                                        <form onSubmit={this.handleSignup} className="form-signin border-bottom border-dark pb-4" >
                                            <div className="form-label-group mb-4">
                                                <input type="email" name='email' className='form-control' placeholder='Email Address' />
                                            </div>
                                            <div className="form-label-group mb-4">
                                                <input type="email" name='emailConfirm' className='form-control' placeholder='Confirm Email Address' />
                                            </div>
                                            <div className="form-label-group mb-4">
                                                <input type="text" name='fullName' className='form-control' placeholder='Full Name' />
                                            </div>
                                            <div className="form-label-group mb-4">
                                                <input type="password" name='password' className='form-control' placeholder='Password' />
                                            </div>
                                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
                                        </form>

                                    <div className='mt-4'>
                                        <h5 style={{textAlign: 'center'}}>Already Have an Account?</h5>
                                        <Link to='/login'> <button className="btn btn-lg btn-warning btn-block text-uppercase" type="submit">Login</button> </Link>
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

export default withAuth(Signup)