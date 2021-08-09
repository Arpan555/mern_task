import React from 'react';
import "./style.css"
import {useDispatch, useSelector } from 'react-redux';
import { updateUser,deleteUser } from "../redux/actions/allactions"
const Users = ({ setCurrentId }) => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users);

  const usersFields = users.length > 0 ? Object.keys(users[0]) : [];

  return (
    <div>
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
                onClick={() => setCurrentId(user._id)}
              />
              {console.log(user._id)}
              <br/>
              <input
                type="button"
                Value="Delete"
                onClick={() => dispatch(deleteUser(user._id))}
              /><br/>

            </tr>
          ))}
        </tbody>
      </table>}</h1>

      </div>
  );
};

export default Users;
