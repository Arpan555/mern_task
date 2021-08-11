import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestcreateuser } from '../Thunk';

const AddForm=()=>{
    const [userData,setuserData]=useState({name:"",email:"",city:""})
    let dispatch=useDispatch();
    let history=useHistory();

    const {name,email,city}=userData;
    
    const handleInputData=(e)=>{
        let {name,value}=e.target;
        setuserData({...userData,[name]:value})
    }
    
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch(requestcreateuser(userData));
        console.log(userData.name,userData.email,userData.city)
        history.push("/users");
            
    
}
    return(
        <div>
            <center>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label><br/>
            <input type="text"  name="name" value={name} onChange={handleInputData}/><br /><br/>
            <label htmlFor="email">Email:</label><br />
            <input type="email"  name="email" value={email} onChange={handleInputData}/><br /><br/>
            <label htmlFor="city">City:</label><br />
            <input type="text" name="city" value={city} onChange={handleInputData}/><br /><br/>
            <input type="submit" value="Add User"/>
            </form>
            </center>
            </div>

    )
}
export default AddForm;
