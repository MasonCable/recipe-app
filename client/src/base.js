import * as firebase from 'firebase/app' 
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyBP-bt6MUycYr225Yh3GfWY5KEx3_IdFvA",
    authDomain: "recipe-god.firebaseapp.com",
    databaseURL: "https://recipe-god.firebaseio.com",
    projectId: "recipe-god",
    storageBucket: "recipe-god.appspot.com",
    messagingSenderId: "238897890196",
    appId: "1:238897890196:web:72e8e588b0649e241ac581"
}

export const firebase = firebase.initializeApp(config)