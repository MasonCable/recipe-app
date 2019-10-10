import { app } from './base'
import sha512 from 'js-sha512'

// make sure that you have a backend with routes built out before attempt

class AuthService {
   loggedIn = () => {
       const token = localStorage.getItem('token')

       return !!token 
   } 

   login = (email, password) => {
       console.log('login')
       app.auth.signInWithEmailAndPassword(email, password)
        .then(res => {
            localStorage.setItem('token', sha512(email).toString())
            return Promise.resolve('All Logged in')
        })
   }

   logout = () => {
       localStorage.clear()
   }
}
export default AuthService