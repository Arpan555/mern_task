const  mongoose  = require("mongoose");
const commentCollect =require("../models/commentCollect")

const addComment = async (req, res) => {
    const {post_id,comment } = req.body;
    const addcommentData= new commentCollect({post_id,comment})
    try {
        await addcommentData.save()
      res.status(201).json(addcommentData)

} catch (error) {
    res.status(409).json({message:error.message})
        }
}

const getComments =async (req,res)=>{
    const id=req.params.id
    try {
        const allComments= await commentCollect.find({post_id:id})
        res.status(200).json(allComments)

    } catch (error) {
        res.status(404).json({message:error.message})
     }


}


module.exports={addComment,getComments}