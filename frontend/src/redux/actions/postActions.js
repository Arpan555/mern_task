import {ADD_POST,SHOW_POSTS,MY_POST,SET_POST,FETCH_COMMENT} from "./index";

export const addpost=(payload)=>({
    type:ADD_POST,
    payload
  })

export const showposts=(payload)=>({
  type:SHOW_POSTS,
  payload
})
export const mypost=(payload)=>({
  type:MY_POST,
  payload
})
export const setpost=(payload)=>({
  type:SET_POST,
  payload
})

// export const addcomment=(payload)=>({
//   type:ADD_COMMENT,
//   payload
// })
export const fetchcomment=(payload)=>({
  type:FETCH_COMMENT,
  payload
})