import { app, db } from './base'
import sha512 from 'js-sha512'

// make sure that you have a backend with routes built out before attempt

class AuthService {
   loggedIn = () => {
       const token = localStorage.getItem('token')

       return !!token 
   } 

   login = (email, password) => {
       console.log('login')
       app.auth().signInWithEmailAndPassword(email, password)
       localStorage.setItem('token', sha512(email).toString())
       return Promise.resolve('All Logged in')
        
   }

   logout = () => {
       localStorage.clear()
   }
     
   register = (data) => {
       let {name: fullName, email: email, password: password} = data


       console.log('register')
       app.auth().createUserWithEmailAndPassword(email, password)
        db.collection('users' + sha512(email).toString()).add({
            email: email,
            name: fullName
        }).then(docRef => {
            console.log("Document written with ID:", docRef.id)
        }).catch(err => console.log("Error adding document: ", err))


       localStorage.setItem('token', sha512(email).toString())
       return Promise.resolve('All Registered')
   }
}
export default AuthService