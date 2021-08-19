import {SIGNIN,SIGNUP,ALL_LOGIN_MEMBER, GET_SEARCH,LOGOUT,ADD_TASK,GET_TASKS, FILTER_TASK_SEARCH} from "../actions/index"

const initialState={
    regiData:{},
    allData:[],
    searchData:[],
    tasks:[],
    token: localStorage.getItem("token"),
    _id:localStorage.getItem("id"),
    name:localStorage.getItem("name")
}

export default function register(state=initialState,action){
    //  console.log(action.payload)
    switch(action.type){
        
        case SIGNUP:
            
            return{
            ...state,
            regiData:{...state.regiData, ...action.payload},
            token:action.payload.token,
            _id:action.payload._id,
            name:action.payload.name
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
        case GET_SEARCH:
            return{
                ...state,
                searchData:action.payload
            }
            case ADD_TASK:
                return{
                    ...state,
                    tasks:action.payload
                }
            case GET_TASKS:
                return{
                    ...state,
                    tasks:action.payload
                    
    }
        case LOGOUT:
            return{
                ...state,
                token:null,
                _id:null

            }
        case FILTER_TASK_SEARCH:
            return{
                ...state,
                searchData:action.payload

            }
            
        default:
            return state
        
    }
    }