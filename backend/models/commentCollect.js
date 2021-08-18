const mongoose = require("mongoose")
const commentSchema = mongoose.Schema({
  post_id:{
    type:String,
    required:true
  },
  comment: {
    type: String,
    required: true,
  }
})

var commentCollect=mongoose.model("commentCollect",commentSchema)

module.exports = commentCollect;
