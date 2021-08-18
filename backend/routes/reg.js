const express=require("express")
const {signup,signin,loginmemberusers}=require("../controllers/reg.js")

const reg_router=express.Router()

reg_router.post("/signup",signup)
reg_router.post("/signin",signin)
reg_router.get("/loginmemberusers",loginmemberusers)

module.exports=reg_router