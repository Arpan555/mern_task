const mongoose = require("mongoose")
const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    stime:{
        type:String,
        required:true
        
    },
    etime:{
        type:String,
        required:true
        
    },
    user:{
        type:String,
        required:true
    }
  });

var taskCollect=mongoose.model("taskCollect",taskSchema)
module.exports = taskCollect;
