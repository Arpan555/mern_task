import React,{useEffect} from 'react'
import { requestshowposts } from '../Thunk'
import {useSelector,useDispatch} from "react-redux"
import { useHistory } from 'react-router-dom'
import {setpost} from "../redux/actions/postActions"
const ShowPosts = () => {

  const postData = useSelector(state=>state.postReducer.posts)
  console.log(postData)
  const dispatch = useDispatch()
  const history=useHistory()

    useEffect(()=>{
        dispatch(requestshowposts(postData))
    },[dispatch])
    const postsFields = postData.length > 0 ? Object.keys(postData[0]) : [];

  return (
    <div>
    <center>
      <input type="button" value="Back To Home" onClick={()=>history.push("/") }/>
      <h1>Posts Detail</h1><hr/>
      <h1>{!postData[0] ? "No Record Found": <table>
        <tbody>
          <tr>


            <th>_Id</th>
            <th>user_id</th>
            <td>title</td>
            <td>body</td>
            <td>__V</td>
            <td>actions</td>
          </tr>
          {postData.map((post) => (
            <tr key={post.id}>
              {postsFields.map((field) => (
                <td key={`${post.id}-${field}`}>
                  {post[field]}
                </td>))}
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



export default ShowPosts
