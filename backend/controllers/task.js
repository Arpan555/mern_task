const  mongoose  = require("mongoose");
const taskCollect =require("../models/taskCollect")
const addTask = async (req, res) => {
     console.log("taskData:-",req.body)
     const {title,date,stime,etime,user} = req.body;
     const addTaskData= new taskCollect({title,date,stime,etime,user})
     console.log("added sucessfully")
    try {
        await addTaskData.save()
        console.log(addTaskData)
        res.status(201).json(addTaskData)

} catch (error) {
    console.log(error)
    res.status(409).json({message:error.message})
        }
}



const showTasks =async (req,res)=>{
    try {
        const alltasksData= await taskCollect.find({})
        res.status(200).json(alltasksData)

    } catch (error) {
        res.status(404).json({message:error.message})
     }
}

const filterTasks=async(req,res)=>{
    try{
        const {sdate,edate}=req.query
        const filtertasksData= await taskCollect.find({date:{$gte:(sdate.toString()),$lte:(edate.toString())}})
        res.status(200).json(filtertasksData)
        }
    catch(error){
        res.status(404).json({message:error.message})
    }
}
const filterBySearch=async(req,res)=>{
    try{
        const searchData=await taskCollect.find({})
        res.status(200).send(searchData)
    }catch(error){
        res.status(404).json({message:error.message})
        
    }
}

module.exports={addTask,showTasks,filterTasks,filterBySearch}