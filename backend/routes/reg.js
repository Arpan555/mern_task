const express=require("express")
const {signup,signin}=require("../controllers/reg.js")

const reg_router=express.Router()

reg_router.post("/signup",signup)
reg_router.post("/signin",signin)

module.exports=reg_router