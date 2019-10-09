import { createStore, combineReducers } from 'redux'

const initialState = {
    recipes: [],
    userData: {}
}

const testReducer1 = (state = initialState, action) => {
    switch (action.type) {
            case 'BUILD_RECIPES' :
                return {...state, recipes: action.payload}
            default:
                return state
        }
}

const testReducer2 = (state = initialState, action) => {
    switch (action.type) {
            case 'GET_USER_DATA' :
                return {...state, userData: action.payload}
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