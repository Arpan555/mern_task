import React,{useState} from 'react'
import { useHistory } from 'react-router'
import { useSelector,useDispatch } from 'react-redux'
import { requestaddcomment } from '../Thunk'
const AddComment = () => {
    const history=useHistory()
    const post_id=useSelector(state=>state.postReducer.setpost._id)
    // console.log(post_id)
    const dispatch = useDispatch()
    const [commentData,setCommentData]=useState({post_id:post_id,comment:""})
    
    const inputChange=(e)=>{
      let {name,value}=e.target;
      setCommentData({...commentData,[name]:value})

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(commentData.post_id,commentData.comment)
        dispatch(requestaddcomment(commentData));
        history.push("/comments")

    }
    return (
        <div>
            <center>
                <input type="button" value="Back To Home" onClick={()=>history.push("/")}/>
                <h1>Add New Comment</h1>
               <form method="POST" onSubmit={handleSubmit}>
                <textarea input="text" name="comment" value={commentData.comment} rows="3" cols="25" onChange={inputChange} / > 
                <br/>
                <input type="submit" value="Comment"/>  
                </form> 
            </center>
        </div>
    )
}

export default AddComment
