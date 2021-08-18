import { SIGNIN,SIGNUP,ALL_LOGIN_MEMBER} from "./index";

export const signup=(payload)=>({
    type:SIGNUP,
    payload,
})

export const signin=(payload)=>{
    // console.log(payload.token)
    // console.log(payload.result._id)
    localStorage.setItem("token",payload.token)
    localStorage.setItem("id",payload.result._id)
    
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

// ============
