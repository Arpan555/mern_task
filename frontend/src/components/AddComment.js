import React,{useState} from 'react'
import { useHistory } from 'react-router'
import { useSelector,useDispatch } from 'react-redux'
const AddComment = () => {
    const history=useHistory()
    const dispatch = useDispatch()
    const [commentData,setCommentData]=useState({comment:""})
    
    const inputChange=(e)=>{

    }
    const handleSubmit=(e)=>{
        e.preventDefault()

    }
    return (
        <div>
            <center>
                <input type="button" value="Back To Home" onClick={()=>history.push("/")}/>
                <h1>New Comment</h1>
               <form onSubmit={handleSubmit}>
                <textarea input="text" name="comment" rows="3" cols="25" value="" onChange={inputChange}/ > 
                <br/><input type="button" value="Comment" />  
                </form> 
            </center>
        </div>
    )
}

export default AddComment
