import React,{useEffect} from "react"
import {useDispatch, useSelector } from "react-redux"
import { requestgetusers} from "../Thunk";
import "./style.css"
const Users=()=>{
    const users = useSelector(state => state.userReducer.users);
    const dispatch = useDispatch()
    console.log(users)
    useEffect(()=>{
        dispatch(requestgetusers(users))
    },[dispatch])
     
    const usersFields = users.length > 0 ? Object.keys(users[0]) : [];

  return (
    <div><center>        <h1>Users Details</h1><hr/>
      <h1>{!users[0] ? "No Record Found": <table>
        <tbody>
          <tr>


            <th>Id</th>
            <td>Name</td>
            <td>Email</td>
            <td>City</td>
            <td>__v</td>
            <td>action</td>
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
                // onClick={() => setCurrentId(user._id)}
              />
              <br/>
              <input
                type="button"
                Value="Delete"
                // onClick={() => dispatch(deleteUser(user._id))}
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
