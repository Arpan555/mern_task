import{FETCH_ALL,CREATE,DELETE, SET_USER} from "./index"

export const createuser=(payload)=>({
  type:CREATE,
  payload
})

export const getusers=(payload)=>({
  type:FETCH_ALL,
  payload
})

export const deleteuser=(id)=>({
  type:DELETE,
  payload:id
})
export const updateuser=(id,data)=>({
  type:DELETE,
  payload:data,
  id:id
})

export const setuser=(data)=>({
  type: SET_USER,
  payload:data
})