const express=require("express")
const {getComments,addComment}=require("../controllers/comment.js")
const comment_router=express.Router()

comment_router.get("/showcomments/:id",getComments)
comment_router.post("/addcomment",addComment)
module.exports=comment_router