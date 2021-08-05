const mongoose = require("mongoose")
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    city:String
})

var userCollect=mongoose.model("userCollect",userSchema)
module.exports=userCollect