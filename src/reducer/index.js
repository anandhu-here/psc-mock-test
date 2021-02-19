
import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { demoReducer } from './demoReducer';
import { timerReducer } from './timerReducer';
export const rootReducer = combineReducers({
    authReducer,
    demoReducer,
    timerReducer
})