import React,{useEffect} from "react"
import {useDispatch, useSelector } from "react-redux"
import { requestgetusers,requestdeleteuser} from "../Thunk";
import {useHistory} from "react-router-dom"
import "./style.css"
import { setuser } from "../redux/actions/userActions";
import {logout} from "../redux/actions/allActions"
const Users=()=>{
    const {token}= useSelector(state =>state.userReducer.token)
    const users = useSelector(state => state.userReducer.users);
    const history=useHistory()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(requestgetusers(users))
    },[dispatch])


    const usersFields = users.length > 0 ? Object.keys(users[0]) : [];

  return (
    <div><center>
      <input type="button" onClick={()=> {history.push("/addform")}} value="Add User" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" value="Logout" onClick={()=>{localStorage.removeItem("token") 
        dispatch(logout()) } 
         } /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" value="LoginMemberList" onClick={()=> {history.push("/loginmemberusers")}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br/><br/>
      <input type="button" onClick={()=> {history.push("/addpost")}} value="Add Post" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" onClick={()=> {history.push("/mypost")}} value="My Post" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" onClick={()=> {history.push("/search")}} value="Search" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br/><br/>
      <input type="button" onClick={()=> {history.push("/showposts")}} value="Show All Post" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" onClick={()=> {history.push("/addtask")}} value="Add Task" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" onClick={()=> {history.push("/showtasks")}} value="Show All Task" />
      

       <h1>Users Details</h1><hr/>
      <h1>{!users[0] ? "No Record Found": <table>
        <tbody>
          <tr>


            <th>Id</th>
            <td>Name</td>
            <td>Email</td>
            <td>City</td>
            <td>__v</td>
            <td>Action</td>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              {usersFields.map((field) => (
                <td key={`${user.id}-${field}`}>
                  {typeof user[field] === "object"
                    ? JSON.stringify(user[field])
                    : user[field]}
                </td>
              ))}
               <input
                type="button"
                Value="Edit"
                   onClick={() => {dispatch(setuser(user))
                     history.push("/editform")} }
              />
              <br/>
              <input
                type="button"
                Value="Delete"
                  onClick={() => dispatch(requestdeleteuser(user._id))}
              /><br/>

            </tr>
          ))}
        </tbody>
      </table>}</h1>
      </center>

      </div>
  );
};

export default Users
