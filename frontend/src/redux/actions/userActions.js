import{FETCH_ALL,CREATE,DELETE} from "./index"

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
