import { applyMiddleware, createStore } from 'redux';
import {rootReducer} from './reducer';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {}
const middleware = [Thunk]
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;