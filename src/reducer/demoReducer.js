import { CHECKED, CLEAR_STATE, DEMO_LOADED, DEMO_LOADING, SUBMISSION } from "../actions/types";

const intialState = {
    isLoading:false,
    mcq:[]
};


export const demoReducer = (state = intialState, action)=>{
    switch (action.type) {
        case DEMO_LOADING:
            return{
                ...state,
                isLoading:true
            }
            break;
        case DEMO_LOADED:
            var final_data = []
            action.payload.questions.map(item=>{
                item["checked"] = false
                item.options.map(i=>{
                    i["is_checked"] = false
                })
                final_data.push(item)
            })
            return{
                ...state,
                isLoading:false,
                mcq:[...final_data]
            }
            break;
        case CHECKED:
            var final_data = []
            
            state.mcq.map(item=>{
                if(item.label === action.label){
                    item["checked"] = true
                    item.options.map(i=>i.id===action.id_?i.is_checked = true:i.is_checked)
                }
                final_data.push(item)
            })
            return {
                ...state,
                mcq:[...final_data]
            }
        case CLEAR_STATE:
            return{
                ...state,
                mcq:[],
                isLoading:false
            }
        case SUBMISSION:
            return{
                ...state,
                results:[...action.payload]
            }
            break;
        default:
            return{
                ...state
            }
            break;
    }
}