const express= require("express");
const { signin, signup }=  require("../controllers/user.js");
const user_router=express.Router()

user_router.post("/signin", signin);
user_router.post("/signup", signup);

module.exports= user_router;
