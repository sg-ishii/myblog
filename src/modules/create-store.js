import { createStore as reduxCreateStore, combineReducers } from "redux"
import postReducer from "./post-state"
import postListReducer from "./post-list-state"

const createStore = () => {
    const reducers = combineReducers({postReducer,postListReducer})
    return reduxCreateStore(reducers)
}
export default createStore