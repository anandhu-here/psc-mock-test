import { CHECKED } from "./types"

export const checkOpt = (label, id_) => (dispatch)=>{
    dispatch({
        type:CHECKED,
        label:label,
        id_:id_
    })
}