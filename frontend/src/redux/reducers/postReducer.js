import {ADD_POST,SHOW_POSTS,MY_POST,FETCH_COMMENT,SET_POST} from "../actions/index"
const initialState={
    posts:[],
    comments:[],
    setpost:{},
    token: localStorage.getItem("token"),
    _id:localStorage.getItem("id")
}
export default function postreducer(state=initialState,action){
    console.log(action.payload)
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                posts:action.payload
}
      case SHOW_POSTS:
            return{
                ...state,
                posts:action.payload
     }
     case MY_POST:
           return{
               ...state,
               posts:action.payload
    }
    // case ADD_COMMENT:
    //     return {
    //         ...state,
    //         comments:action.payload
    //     }
    case SET_POST:
        return{
            ...state,
            setpost:{...state.setpost,...action.payload}
        }
    case FETCH_COMMENT:
        return{
            ...state,
            comments:action.payload


        }

          default:
          return state
    }
}
