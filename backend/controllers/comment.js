const  mongoose  = require("mongoose");
const commentCollect =require("../models/commentCollect")

const addComment = async (req, res) => {
    const {post_id,comment } = req.body;
    console.log(post_id,comment)
    const addcommentData= new commentCollect({post_id,comment})
    try {
        await addcommentData.save()
        console.log("123",addcommentData)
      res.status(201).json(addcommentData)

} catch (error) {
    console.log(error)
    res.send(409).json({message:error.message})
        }
}

const getComments =async (req,res)=>{
    const id=req.params.id
    // console.log(id)
    try {
        const allComments= await commentCollect.find({post_id:id})
        // console.log("1245",allComments)
        res.status(200).json(allComments)

    } catch (error) {
        console.log(error)
        res.status(404).json({message:error.message})
     }


}


module.exports={addComment,getComments}