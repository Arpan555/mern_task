import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {requestgettasks,requestgetfiltereddata,requestsearchtask} from "../Thunk"
import { useHistory } from 'react-router'
const ShowTasks = () => {
    const name=useSelector(state=>state.regReducer.name)
    const allTasks= useSelector(state =>state.regReducer.tasks)
    const dispatch = useDispatch()
    const history=useHistory()
    const [text, setText] = useState("");
    const [suggetion, setSuggetion] = useState(allTasks)
    const [filterData,setFilterData]=useState({sdate:"",edate:""})
    
    const handleInputChange=(e)=>{
        let {name,value}=e.target;
        setFilterData({...filterData,[name]:value})
    }
    const handleChange = (text) => {
      console.log(text) 
      let matches = []
      
      if(text.length>0) {
           matches = allTasks.filter(record => {
            const regex = new RegExp(`${text}`, 'gi');
            return record.user.match(regex)
        })
        
    }
    setSuggetion(matches)
    setText(text);
}

    
    const submitFilter=(e)=>{
        e.preventDefault()
        dispatch(requestgetfiltereddata(filterData))
        
    }
    
    useEffect(() => {
      dispatch(requestsearchtask()) 
  }, [dispatch])
  
    useEffect(()=>{
        dispatch(requestgettasks(allTasks))
    },[dispatch])
    
    
 const allTasksFields = allTasks.length > 0 ? Object.keys(allTasks[0]) : [];

    
    return (
        <div>
            <center>
                <form onSubmit={submitFilter}>
                <label htmlFor="html">Start Date</label>
                <input type="date" name="sdate" onChange={handleInputChange}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="html">End Date</label>
                <input type="date" name="edate" onChange={handleInputChange}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="submit" value="Apply Filter"/>
                </form><br/><br/>
                <label htmlFor="html">Search</label>
                <input type="text" name="search" placeholder="Search..." autoComplete="off" onChange={e => handleChange(e.target.value)} value={text}  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br/>
                {text ? 
                <table>
                    <tbody>
                      <tr>
                        <th>_Id</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>State Time</th>
                        <th>End Time</th>
                        <th>User</th>
                        <th>__V</th>
                      </tr>
                      {suggetion && suggetion.map((suggetions, i) => 
                        <tr key={i}>
                          <td>{suggetions._id}</td>
                          <td>{suggetions.title}</td>
                          <td>{suggetions.date}</td>
                          <td>{suggetions.stime}</td>
                          <td>{suggetions.etime}</td>
                          <td>{suggetions.user}</td>
                          <td>{suggetions.__v}</td>
                          
                        </tr>)}
                    </tbody>
                  </table>:""}
              
                
          
                <hr/>

                <h1>Show Tasks</h1>
                <h1>{!allTasks[0] ? "No Task Found": <table>
        <tbody>
          <tr>
            <th>_Id</th>
            <th>Title</th>
            <td>Date</td>
            <td>Start Time</td>
            <td>End Time</td>
            <td>User</td>
            <td>__V</td>
          </tr>
          {allTasks.map((task) => (
            <tr key={task.id}>
              {allTasksFields.map((field) => (
                <td key={`${task.id}-${field}`}>
                  {task[field]}
                </td>))} 
            </tr>
          ))}
        </tbody>
        </table>}
        </h1>
            </center>
        </div>
    )
}

export default ShowTasks
