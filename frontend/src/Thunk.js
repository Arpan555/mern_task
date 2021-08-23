import axios from "axios"
import {signup,signin,loginmemberusers,getsearch,addtask,gettasks,filtertasksearch} from "./redux/actions/allActions"
import {fetchcomment,addpost,showposts,mypost,addcomment} from "./redux/actions/postActions"
import { createuser,getusers ,deleteuser,updateuser} from "./redux/actions/userActions"
const request=axios.create({
    baseURL:"http://localhost:8000",
})

export const requestcreateuser=(state)=>{
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
            const deleteData= await request.delete(`/delete/${id}`)
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
            const signupData= await request.post("/signup",state)
            dispatch(signup(signupData.data));
            dispatch(getusers)

        }catch(err){
            console.log(err);
        }
    }
}

export const requestsignin=(state)=>{
    return async(dispatch)=>{
        try{
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
            const allData=await request.get("/loginmemberusers",state)
            dispatch(loginmemberusers(allData.data))

        } catch (error) {

        }
    }
}

export const requestaddpost=(state)=>{
    return async(dispatch)=>{
        try {
            const postData=await request.post("/addpost",state)
            dispatch(addpost(postData.data))
            dispatch(showposts)
        } catch (error) {
            console.log(error)
}
}
}

export const requestshowposts=(state)=>{
    return async(dispatch)=>{
        try {
            const postData=await request.get("/showposts",state)
            dispatch(showposts(postData.data))

        } catch (error) {
            console.log(error)

        }
    }
}

export const requestmypost=(id)=>{
    return async(dispatch)=>{
        try {
            const postData=await request.get(`/mypost/${id}`)  //user_id
            dispatch(mypost(postData.data))

        } catch (error) {
            console.log(error)

        }
    }
}

export const requestaddcomment=(state)=>{//id,data
    return async(dispatch)=>{
        try {
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

export const requestaddtask=(state)=>{
    return async(dispatch)=>{
        try{
            const taskData=await request.post("/addtask",state)
            dispatch(addtask(taskData))
            dispatch(gettasks())
        }catch(error){
            console.log(error)
        }
    }
}

export const requestgettasks=(state)=>{
    return async(dispatch)=>{
        try {
            const tasksData=await request.get("/showtasks",state)
            dispatch(gettasks(tasksData.data))
        } catch (error) {
            console.log(error)

        }
    }
}

export const requestgetfiltereddata=(state)=>{
    return async(dispatch)=>{
        try {
            const date= JSON.stringify(state)
            console.log(date)
            console.log(typeof(date))
            const filterData=await request.get(`/filterdata/${date}`)
            // dispatch(filtertask(filterData))
                  
             
        } catch (error) {
            console.log(error)    
        }
    }
}

export const requestsearchtask=(state)=>{
    return async(dispatch)=>{
        try {
            const filterSearchData=await request.get("/filterbysearch",state)
            dispatch(filtertasksearch(filterSearchData))
        } catch (error) {
            console.log(error)
            
        }
    }
}