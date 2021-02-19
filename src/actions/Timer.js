import { TIMER_INIT, TIMER_STOP } from "./types"

export const timer_init = () =>(dispatch)=>{
    dispatch({
        type:TIMER_INIT
    })
}

export const timer_end = () =>(dispatch)=>{
    dispatch({
        type:TIMER_STOP
    })
}