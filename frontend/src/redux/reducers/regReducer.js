import {SIGNIN,SIGNUP} from "../actions/index"

const initialState={
    regiData:{},
    token: localStorage.getItem("token"),
    _id:localStorage.getItem("_id")
}

export default function register(state=initialState,action){
    // console.log(action.payload)
    switch(action.type){
        
        case SIGNUP:
            
            return{
            ...state,
            regiData:{...state.regiData, ...action.payload}
            }
        
        case SIGNIN:
            
        return{
                ...state,
                regiData:{...state.regiData , ...action.payload},
                
            }
        
        default:
            return state
        
    
    
        }
    }