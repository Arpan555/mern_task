import{FETCH_ALL,CREATE} from "./index"

export const createuser=(payload)=>({
  type:CREATE,
  payload
})

export const getusers=(payload)=>({
  type:FETCH_ALL,
  payload
})
