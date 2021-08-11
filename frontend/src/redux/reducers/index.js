import {combineReducers} from "redux"
import regReducer from "./regReducer"
import userReducer from "./userReducer"
export const reducers =combineReducers({
    regReducer,userReducer
})