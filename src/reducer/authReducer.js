import { LOGIN_SUCCESSFULL } from "../actions/types";

const initialState = {
    isAuth:false,
    isLoading:false
};

export const authReducer = ( state = initialState, action ) => {
    switch (action.key) {
        case LOGIN_SUCCESSFULL:
            return{
                ...state,
                isAuth:true,
                isLoading:false
            }
            break;
    
        default:
            return{
                ...state
            }
            break;
    }
}