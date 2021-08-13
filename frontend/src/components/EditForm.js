import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
 import { requestupdateuser } from '../Thunk';

const EditForm=()=>{
    const dispatch = useDispatch()
    const prevData=useSelector((state)=>state.userReducer.setuser)
    const {_id,name,email,city}=prevData
    const history=useHistory()    
    
    const [updateData,setUpdateData]=useState({name:prevData.name,email:prevData.email,city:prevData.city})

    const handleInputChange=(e)=>{
        setUpdateData({...updateData,[e.target.name]:e.target.value})
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        //  console.log(_id,updateData)
        dispatch(requestupdateuser(_id,updateData));
        history.push("/users");
            
    
}
    return(
        <div>
            <center>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label><br/>
            <input type="text" name="name" defaultValue={prevData.name} onChange={handleInputChange}/><br /><br/>
            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email" defaultValue={prevData.email} onChange={handleInputChange}/><br /><br/>
            <label htmlFor="city">City:</label><br />
            <input type="text" name="city" defaultValue={prevData.city} onChange={handleInputChange}/><br /><br/>
            <input type="submit" value="Update User"/>
            </form>
            </center>
            </div>

    )
}
export default EditForm;
