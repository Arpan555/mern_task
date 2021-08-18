import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { requestfetchcomments } from '../Thunk'
import { setpost } from '../redux/actions/postActions'
import { useHistory } from 'react-router'
const Comments = () => {
    const user_id=useSelector(state=>state.postReducer._id)
    const post_id=useSelector(state=>state.postReducer.setpost._id)
    const post=useSelector(state=>state.postReducer.setpost)
    const commentsData=useSelector(state=>state.postReducer.comments)
    const history=useHistory()
    console.log(user_id)
    console.log(post.user_id)
    console.log(post)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(requestfetchcomments(post_id))
    },[dispatch])
    const commentsFields = commentsData.length > 0 ? Object.keys(commentsData[0]) : [];

    return (
        <div><center>
            <input type="button" value="Go To Home" onClick={()=>history.push("/")}/><hr/>
            <h1>comments</h1>
            <h1>{!commentsData[0] ? "No Comment Found": <table>
        <tbody>
          <tr>


            <th>_Id</th>
            <th>post_id</th>
            <td>comment</td>
            <td>__V</td>
            
          </tr>
          {commentsData.map((comment) => ( 
            <tr key={comment.id}>
              {commentsFields.map((field) => (
                <td key={`${comment.id}-${field}`}>
                  {comment[field]}
                </td>
              ))}
          </tr>
          ))}
        </tbody>
      </table>}</h1>


            </center>
        </div>
    )
}

export default Comments
