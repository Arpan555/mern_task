

const { Mongoose } = require("mongoose");
const postCollect =require("../models/postCollect")

const addPost = async (req, res) => {
    // console.log("5:-",req.body)
    const {id,title,body } = req.body;
    // console.log("7:-",id,title,body)
    const addPostData= new postCollect({user_id:id,title,body})
    // console.log("added sucessfully")
    try {
        await addPostData.save()
        // console.log(addPostData)
        res.status(201).json(addPostData)

} catch (error) {
    console.log(error)
    res.send(409).json({message:error.message})
        }
}

const showPosts =async (req,res)=>{
    try {
        const allPostData= await postCollect.find({})
        // console.log("1245",allPostData)
        res.status(200).json(allPostData)

    } catch (error) {
        console.log(error)
        res.status(404).json({message:error.message})
     }


}


const myPost =async (req,res)=>{
    try {
        const _id= req.params.id
        const allPostData= await postCollect.find({user_id:_id})
        // console.log("1245",allPostData)
        res.status(200).json(allPostData)

    } catch (error) {
        console.log(error)
        res.status(404).json({message:error.message})
     }


}

module.exports={addPost,showPosts,myPost}
