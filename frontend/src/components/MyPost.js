import React,{useEffect} from 'react'
import { requestmypost } from '../Thunk'
import {useSelector,useDispatch} from "react-redux"
import { useHistory } from 'react-router-dom'
import { setpost } from '../redux/actions/postActions'
const MyPost = () => {

  const postData = useSelector(state=>state.postReducer.posts)
  const id=useSelector(state=>state.postReducer._id)
  const dispatch = useDispatch()
  const history=useHistory()

    useEffect(()=>{
        // console.log(id,postData)
        dispatch(requestmypost(id))
    },[dispatch])
    const postsFields = postData.length > 0 ? Object.keys(postData[0]) : [];

  return (
    <div>
    <center>
      <input type="button" value="Back To Home" onClick={()=>history.push("/") }/>
      <h1> MyPost Detail</h1><hr/>
      <h1>{!postData[0] ? "No Record Found": <table>
        <tbody>
          <tr>


            <th>_Id</th>
            <th>user_id</th>
            <td>title</td>
            <td>body</td>
            <td>__V</td>
            <td>action</td>

          </tr>
          {postData.map((post) => ( 
            <tr key={post.id}>
              {postsFields.map((field) => (
                <td key={`${post.id}-${field}`}>
                  {post[field]}
                </td>
              ))}
              <input type="button" value="comment" onClick={()=>{ dispatch(setpost(post))
                  history.push("/comments")} }/>
          </tr>
          ))}
        </tbody>
      </table>}</h1>
    </center>
      </div>
  );
};



export default MyPost
