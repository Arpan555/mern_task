import {CREATE, FETCH_ALL,DELETE,UPDATE} from "../actions/index"
const initialState={
    users:[],
    token: localStorage.getItem("token"),
    _id:localStorage.getItem("_id")
}

export default function usersreducer(state=initialState,action){
    console.log(action.payload)
    switch(action.type){
    case CREATE:
        return{
            ...state,
            users:action.payload
}
    case FETCH_ALL:
        return{
            ...state,
            users:action.payload


        }
    case DELETE:
        return {...state,
        users:  state.users.filter((user) => user._id !== action.payload)
    }
    case UPDATE:
        return{
            ...state,
            users: state.users.map((user) => (user._id === action.payload._id ? action.payload : user))
        }
        
    default:
        return state
}
}