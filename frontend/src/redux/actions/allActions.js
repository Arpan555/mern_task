import { SIGNIN,SIGNUP,ALL_LOGIN_MEMBER,GET_SEARCH,LOGOUT,ADD_TASK,GET_TASKS,FILTER_TASK_SEARCH,FILTER_TASK} from "./index";

export const signup=(payload)=>({
    type:SIGNUP,
    payload,
})

export const signin=(payload)=>{
    // console.log(payload.token)
    // console.log(payload.result._id)
    localStorage.setItem("token",payload.token)
    localStorage.setItem("id",payload.result._id)
    localStorage.setItem("name",payload.result.name)
    
    return{
    type:SIGNIN,
    payload,
    }
};

export const loginmemberusers=(payload)=>{
    return{
        type:ALL_LOGIN_MEMBER,
        payload
    }
}
export const getsearch=(payload)=>{
    return{
        type:GET_SEARCH,
        payload
    }
}
export const logout=(payload)=>{
    return{
        type:LOGOUT,
        payload
    }
}
export const addtask=(payload)=>({
    type: ADD_TASK,
    payload
 })
 export const gettasks=(payload)=>({
    type:GET_TASKS,
    payload
  })

export const filtertasksearch=(payload)=>({
    type:FILTER_TASK_SEARCH,
    payload
})
export const filtertask=(payload)=>({
    type:FILTER_TASK,
    payload
})