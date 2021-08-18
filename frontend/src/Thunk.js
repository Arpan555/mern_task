import axios from "axios"
import {signup,signin,loginmemberusers,getsearch} from "./redux/actions/allActions"
import {fetchcomment,addpost,showposts,mypost,addcomment} from "./redux/actions/postActions"
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
            dispatch(getusers)
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

export const requestloginmemberusers=(state)=>{
    return async(dispatch)=>{
        try {
            console.log(state)
            const allData=await request.get("/loginmemberusers",state)
            dispatch(loginmemberusers(allData.data))

        } catch (error) {

        }
    }
}

export const requestaddpost=(state)=>{
    return async(dispatch)=>{
        try {
            console.log(state)
            const postData=await request.post("/addpost",state)
            console.log(postData.data)
            dispatch(addpost(postData.data))
        } catch (error) {
            console.log(error)
}
}
}

export const requestshowposts=(state)=>{
    return async(dispatch)=>{
        try {
            console.log(state)
            const postData=await request.get("/showposts",state)
            console.log(postData.data)
            dispatch(showposts(postData.data))

        } catch (error) {
            console.log(error)

        }
    }
}

export const requestmypost=(id)=>{
    return async(dispatch)=>{
        try {
            // console.log(id,state)
            const postData=await request.get(`/mypost/${id}`)  //user_id
            console.log(postData.data)
            dispatch(mypost(postData.data))

        } catch (error) {
            console.log(error)

        }
    }
}

export const requestaddcomment=(state)=>{//id,data
    return async(dispatch)=>{
        try {
            console.log(state)
            const newCommentData=await request.post("/addcomment",state)
            dispatch(addcomment(newCommentData.data))
        } catch (error) {
            console.log(error)

        }
    }
}


export const requestfetchcomments=(id)=>{
    return async(dispatch)=>{
        try {
            const commentsData=await request.get(`/showcomments/${id}`)
            dispatch(fetchcomment(commentsData.data))
        } catch (error) {
            console.log(error)

        }
    }
}

export const requestgetsearch=(state)=>{
    return async(dispatch)=>{
        try{
            const data=await request.get("/search",state)
            dispatch(getsearch(data))
        }catch(error){
            console.log(error)
        }
    }
}