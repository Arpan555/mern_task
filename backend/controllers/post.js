const  mongoose  = require("mongoose");
const postCollect =require("../models/postCollect")

const addPost = async (req, res) => {
    const {id,title,body } = req.body; 
    const addPostData= new postCollect({user_id:id,title,body})
    try {
        await addPostData.save()
        res.status(201).json(addPostData)

} catch (error) {
    res.status(409).json({message:error.message})
        }
}

const showPosts =async (req,res)=>{
    try {
        const allPostData= await postCollect.find({})
        res.status(200).json(allPostData)

    } catch (error) {
        res.status(404).json({message:error.message})
     }


}


const myPost =async (req,res)=>{
    try {
        const _id= req.params.id
        const allPostData= await postCollect.find({user_id:_id})
        res.status(200).json(allPostData)

    } catch (error) {
        res.status(404).json({message:error.message})
     }


}

module.exports={addPost,showPosts,myPost}
