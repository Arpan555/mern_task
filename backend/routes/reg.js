const express=require("express")
const {signup,signin,loginmemberusers,getSearch}=require("../controllers/reg.js")

const reg_router=express.Router()

reg_router.post("/signup",signup)
reg_router.post("/signin",signin)
reg_router.get("/loginmemberusers",loginmemberusers)
reg_router.get("/search",getSearch)
module.exports=reg_router