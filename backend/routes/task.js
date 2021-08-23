const express=require("express")
const task_router=express.Router()
const {addTask,showTasks,filterTasks,filterBySearch}=require("../controllers/task")
task_router.post("/addtask",addTask)
task_router.get("/showtasks",showTasks)
task_router.get("/filterbysearch",filterBySearch)
task_router.get("/filterdata",filterTasks)
module.exports=task_router