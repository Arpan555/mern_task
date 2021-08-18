const mongoose = require("mongoose"), Schema = mongoose.Schema
const postSchema = mongoose.Schema({
  user_id:{
    type:String,
    required:true
  },
  title: {
    type: String,
    required: true,
  },
  body: {
      type: String,
    required: true },

  });

var postCollect=mongoose.model("postCollect",postSchema)
module.exports = postCollect;
