import React,{useState} from 'react'
import { useHistory } from 'react-router'
import {useDispatch,useSelector } from 'react-redux'
import {requestaddtask} from "../Thunk"
const AddTask = () => {
    const name = useSelector(state => state.regReducer.name)
    const [taskData,setTaskData]=useState({title:"",date:"",stime:"",etime:"",user:name})
    const history=useHistory()
    const dispatch = useDispatch()
    const handleInputChange=(e)=>{
        let {name,value}=e.target;
        setTaskData({...taskData,[name]:value})
        
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(requestaddtask(taskData));
        history.push("/showtasks");
        
        

    }
    return (
        <div><center>
            <input type="button" value="Back To Home" onClick={()=>history.push("/") }/>
            <h1>Add Task</h1>
            <form method="POST" onSubmit={handleSubmit}>
            {/* title, date, startTime, endTime and user */}
            <label htmlFor="html">Title: </label>
            <input type="text" name="title" value={taskData.title} onChange={handleInputChange} /><br/><br/>
            <label htmlFor="html">Date:</label>
            <input type="date" name="date" value={taskData.date} onChange={handleInputChange}/><br/><br/>
            <label htmlFor="html">Start Time:</label>
            <input type="time" name="stime" value={taskData.stime} onChange={handleInputChange}/><br/><br/>
            <label htmlFor="html">End Time:</label>
            <input type="time" name="etime" value={taskData.etime} onChange={handleInputChange}/><br/><br/>
            <label htmlFor="html">User:</label>
            <input type="text" name="user" value={taskData.user} onChange={handleInputChange} readOnly/><br/><br/>
            <input type="submit" value="Add Task"/>
            
            </form>
        </center>
        </div>
    )
}

export default AddTask
