const express=require("express")
const {addPost,showPosts,myPost}=require("../controllers/post.js")

const post_router=express.Router()

post_router.post("/addpost",addPost)
post_router.get("/showposts",showPosts)
post_router.get("/mypost/:id",myPost)
module.exports=post_router
