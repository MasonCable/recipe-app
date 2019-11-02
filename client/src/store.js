import { createStore, combineReducers } from 'redux'

const initialState = {
    recipes: [],
    dRecipes: [],
    foodTypes: [],
    dishType: [],
    userData: {},
    viewRecipe: {},
    userToken: ''
}



// Make sure that this gets moved into a seperate file
const testReducer1 = (state = initialState, action) => {
    switch (action.type) {
            case 'BUILD_RECIPES':
                return {...state, recipes: action.payload}   
            case 'DEFAULT_RECIPES':
                return {...state, dRecipes: action.payload}
            case 'FOOD_TYPES':
                return {...state, foodTypes: action.payload}
            case 'DISH_TYPE':
                return {...state, dishType: action.payload}
            case 'VIEW_RECIPE':
                return {...state, viewRecipe: action.payload}            
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