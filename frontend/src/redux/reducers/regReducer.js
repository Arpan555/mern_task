import {SIGNIN,SIGNUP,ALL_LOGIN_MEMBER} from "../actions/index"

const initialState={
    regiData:{},
    allData:[],
    token: localStorage.getItem("token"),
    _id:localStorage.getItem("id")
}

export default function register(state=initialState,action){
    // console.log(action.payload)
    switch(action.type){
        
        case SIGNUP:
            
            return{
            ...state,
            regiData:{...state.regiData, ...action.payload},
            token:action.payload.token,
            _id:action.payload._id
            }
        
        case SIGNIN:
            
        return{
                ...state,
                regiData:{...state.regiData , ...action.payload},
                
            }
        case ALL_LOGIN_MEMBER:
            return{
                ...state,
            allData:action.payload

            }
        
        default:
            return state
        
    }
    }