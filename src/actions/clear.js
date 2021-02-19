import { CLEAR_STATE } from "./types"

export const clear_state = () => (dispatch) =>{
    dispatch({
        type:CLEAR_STATE
    })
}