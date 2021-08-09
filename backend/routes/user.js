const express= require("express");
const router = express.Router();
const { signin, signup }=  require("../controllers/user.js");
const user_router=express.Router()
router.post("/signin", signin);
router.post("/signup", signup);

module.exports= user_router;
