const express=require("express")
const {createUser,getUsers}=require("../controllers/users.js")
const users_router=express.Router()

users_router.post("/adduser",createUser);
users_router.get("/users",getUsers);

module.exports=users_router