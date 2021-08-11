import axios from "axios"
import {signup,signin} from "./redux/actions/allActions"
import { createuser,getusers } from "./redux/actions/userActions"
const request=axios.create({
    baseURL:"http://localhost:8000",
})

export const requestcreateuser=(state)=>{
    return async(dispatch)=>{
        try {
            const newData=await request.post("/adduser",state)
            dispatch(createuser(newData.data))
        } catch (error) {
            console.log(error)
            
        }
    }
}

export const requestgetusers=(state)=>{
    return async(dispatch)=>{
        try {
            console.log(state)
            const usersData=await request.get("/users",state)
            console.log(usersData)
            dispatch(getusers(usersData.data))
        } catch (error) {
            console.log(error)
            
        }
    }
}

export const requestsignup=(state)=>{
    return async(dispatch)=>{
        try{
            console.log(state)
            const signupData= await request.post("/signup",state)
            dispatch(signup(signupData.data));

        }catch(err){
            console.log(err);
        }
    }
}

export const requestsignin=(state)=>{
    return async(dispatch)=>{
        try{
            console.log(state)
            const signinData= await request.post("/signin",state)
            dispatch(signin(signinData.data)); //data.token data.oldusers
        }catch(err){
            console.log(err);
        }
    }
}
