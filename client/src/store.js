import { createStore } from 'redux'

const rootReducer = () => {
    return 'Store testing'
}

const store = createStore(rootReducer)

export default store