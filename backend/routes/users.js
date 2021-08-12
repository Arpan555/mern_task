const express=require("express")
const {createUser,getUsers,deleteUser,updateUser}=require("../controllers/users.js")
const users_router=express.Router()

users_router.post("/adduser",createUser);
users_router.get("/users",getUsers);
users_router.delete("/delete/:id",deleteUser);
users_router.patch("/edit/:id",updateUser);
module.exports=users_router