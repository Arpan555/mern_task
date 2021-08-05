const express=require("express")
const mongoose=require("mongoose")
const userCollect=require("../models/userCollect.js")
const router=express.Router()

 const getUsers= async (req,res)=>{
   try {
       const allUser=await userCollect.find()
       res.status(200).json(allUser)
       
   } catch (error) {
       res.status(404).json({message:error.message})
       
   }
}

 const getUser = async (req, res) => { 
    const { id } = req.params;

    try {
        const user = await userCollect.findById(id);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const createUser = async (req, res) => {
    const { name,email,city } = req.body;

    const newUser = new userCollect({name,email,city})

    try {
        await newUser.save();

        res.status(201).json(newUser );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name,email,city } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedUser = { name,email,city , _id: id };

    await userCollect.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
}

 const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await userCollect.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}
module.exports={router,getUsers,getUser,createUser,deleteUser,updateUser,}