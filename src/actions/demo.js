import { DEMO_LOADED, DEMO_LOADING, SUBMISSION } from "./types";
import axios from 'axios';

const url = 'http://localhost:8000/api/'
const headersConfig = {
    headers:{
        "Content-Type":"application/json"
    }
} 
export const getDemotest = () => (dispatch, getState) =>{
    dispatch({
        type:DEMO_LOADING
    })
    axios.get(`${url}questions/demo`, headersConfig )
        .then(res=>{
            dispatch({
                type:DEMO_LOADED,
                payload:res.data
            })
        })
    
}

export const finalSubmission = (data) => (dispatch) =>{
    console.log(data);
    dispatch({
        type:SUBMISSION,
        payload:data
    })
}