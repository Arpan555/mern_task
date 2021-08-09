const express= require("express")
const {getUsers,createUser,getUser,updateUser,deleteUser} =require("../controllers/users.js")
const users_router=express.Router()
users_router.get("/",getUsers)
users_router.post("/",createUser)
users_router.get('/:id', getUser);
users_router.patch('/:id', updateUser);
users_router.delete('/:id', deleteUser);
module.exports=users_router
