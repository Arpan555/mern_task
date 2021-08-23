import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {requestaddpost} from "../Thunk"
const AddPost = () => {
const _id=useSelector(state=>state.postReducer._id)
const [postData,setPostData]=useState({id:_id,title:"",body:""})
let dispatch=useDispatch();
let history=useHistory();

const {id,title,body}=postData;

const handleInputData=(e)=>{
    let {name,value}=e.target;
    setPostData({...postData,[name]:value})
}

const handleSubmit= (e)=>{
    e.preventDefault();
    dispatch(requestaddpost(postData));
    history.push("/showposts");


}
    return (
        <div><center>
             <input type="button" value="Back To Home" onClick={()=>history.push("/") }/>
            <h1>Add Post</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="html">Title:</label><br/>
            <input type="text"  name="title" value={title} onChange={handleInputData}/><br /><br/>
            <label htmlFor="html">Body:</label><br />
            <textarea type="text"  name="body" rows="3" cols="30" value={body} onChange={handleInputData}/><br /><br/>
            <input type="submit" value="Add Post"/>
           </form>
        </center>
        </div>
    )
}

export default AddPost
