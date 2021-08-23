const mongoose=require("mongoose")
const usersSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true
    }
})
var usersCollect=mongoose.model("usersCollect",usersSchema)
module.exports=usersCollect

