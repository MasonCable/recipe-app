import { createStore, combineReducers } from 'redux'

const initialState = {
    recipes: [],
    userData: {},
    userToken: ''
}

// Make sure that this gets moved into a seperate file
const testReducer1 = (state = initialState, action) => {
    switch (action.type) {
            case 'BUILD_RECIPES':
                return {...state, recipes: action.payload}        
            default:
                return state
        }
}

// Make sure that this gets moved into a seperate file
const testReducer2 = (state = initialState, action) => {
    switch (action.type) {
            case 'GET_USER_DATA':
                return {...state, userData: action.payload}
            case 'SET_TOKEN':
                return {...state, userToken: action.payload}
            default:
                return state
        }
}


const rootReducer = combineReducers({
    testReducer1,
    testReducer2
})

const store = createStore(rootReducer)

export default store