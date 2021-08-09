const mongoose = require("mongoose")
const usersSchema=mongoose.Schema({
    name:String,
    email:String,
    city:String
})

var usersCollect=mongoose.model("userCollect",usersSchema)
module.exports=usersCollect