const express=require("express")
const {getComments}=require("../controllers/comment.js")
const comment_router=express.Router()

comment_router.get("/showcomments/:id",getComments)

module.exports=comment_router