import { createStore as reduxCreateStore, applyMiddleware, combineReducers, compose } from "redux"
import postReducer from "./post-state"
import postListReducer from "./post-list-state"
import * as asyncInitialState from 'redux-async-initial-state';
import { getFunc } from "./post-state"

const createStore = () => {
    const reducers = asyncInitialState.outerReducer(combineReducers({
        postReducer,
        postListReducer
    }));
    return reduxCreateStore(reducers, compose(applyMiddleware(asyncInitialState.middleware(getFunc))))
}
export default createStore