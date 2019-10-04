// Use combineReducers for when we have to handle multiple states
// We can import
import { createStore, combineReducers } from 'redux'

const initialState = {
    recipes: []
}

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
            case 'BUILD_RECIPES' :
                return {...state, recipes: action.payload}
            default:
                return state
        }
}

const store = createStore(testReducer)

export default store