import { CLEAR_STATE, TIMER_INIT, TIMER_STOP } from "../actions/types";

const initialState = {
    Timer:null
}

export const timerReducer = (state={}, action) =>{
    switch (action.type) {
        case TIMER_INIT:
            return{
                ...state,
                Timer:"start"
            }
            break;
        case TIMER_STOP:
            return{
                ...state,
                Timer:"stop"
            }
        case CLEAR_STATE:
            return{
                ...state,
                Timer:null
            }
        default:
            return{
                ...state
            }
            break;
    }
    
}