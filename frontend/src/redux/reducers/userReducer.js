import {CREATE, FETCH_ALL} from "../actions/index"
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
    default:
        return state
}


}