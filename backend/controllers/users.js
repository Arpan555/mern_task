const { Mongoose } = require("mongoose");
const usersCollect =require("../models/usersCollect")

const createUser = async (req, res) => {
    const {name, email, city } = req.body;
    const addData= new usersCollect({name,email,city})
    try {
        // console.log(addData)
        await addData.save()
        // console.log(addData)
        res.status(201).json(addData)
        
} catch (error) {
    res.send(409).json({message:error.message})
        }

}

const getUsers =async (req,res)=>{
    try {
        const allData= await usersCollect.find({})
        // console.log("allDATA",allData)
        res.status(200).json(allData)
    } catch (error) {
        res.status(404).json({message:error.message})
        }

        
}  
      
const deleteUser =async (req,res)=>{
    const id=req.params.id
     try {
        const allData= await usersCollect.findByIdAndDelete(id)
        // console.log("allDATA",allData)
        res.status(200).json(allData)
    } catch (error) {
        res.status(404).json({message:error.message})
        }
}  

const updateUser =async (req,res)=>{
    const {id} =req.params;
    const {name,email,city}=req.body
    const updateData={name,email,city,_id:id}
    console.log("update",name,email,city,id)
    try {
        const updatedData=await usersCollect.findByIdAndUpdate(id,updateData,{new:true})
        res.status(200).json(updatedData)
        console.log("123")
        
    } catch (error) {
        // console.log(error)
        res.status(404).json({message:error.message})
        
    }
}  


module.exports={createUser,getUsers,deleteUser,updateUser}
    


