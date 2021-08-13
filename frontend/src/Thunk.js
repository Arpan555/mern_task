import axios from "axios"
import {signup,signin} from "./redux/actions/allActions"
import { createuser,getusers ,deleteuser,updateuser} from "./redux/actions/userActions"
const request=axios.create({
    baseURL:"http://localhost:8000",
})

export const requestcreateuser=(state)=>{//id,data
    return async(dispatch)=>{
        try {
            const newData=await request.post("/adduser",state)
            dispatch(createuser(newData.data))
            dispatch(getusers)
        } catch (error) {
            console.log(error)
            
        }
    }
}
export const requestgetusers=(state)=>{
    return async(dispatch)=>{
        try {
            const usersData=await request.get("/users",state)
            dispatch(getusers(usersData.data))
        } catch (error) {
            console.log(error)
            
        }
    }
}

export const requestdeleteuser=(id)=>{
    return async(dispatch)=>{
        try {
            // console.log(id)
            const deleteData= await request.delete(`/delete/${id}`)
            // console.log(deleteData)
            dispatch(deleteuser(id))
            dispatch(getusers)
        } catch (error) {
            console.log(error)
            
        }
    }
}

export const requestupdateuser=(id,data)=>{
    return async(dispatch)=>{
        try {
            console.log(id,data)
            const {updateData} = await request.patch(`/edit/${id}`,data)
            dispatch(updateuser(updateData))
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
