import {combineReducers} from "redux"
import regReducer from "./regReducer"
import userReducer from "./userReducer"
import postReducer from "./postReducer"
export const reducers =combineReducers({
    regReducer,userReducer,postReducer
})
