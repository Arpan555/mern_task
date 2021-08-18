import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { requestloginmemberusers } from '../Thunk'
import { useHistory } from 'react-router-dom'
const LoginMemberUsers = () => {
    const loginUsers  = useSelector(state => state.regReducer.allData)
    // console.log(loginUsers)
    const history=useHistory()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(requestloginmemberusers(loginUsers))
    },[dispatch])
    
    
    return (
        <div><center>
            <input type="button" value="Back To Home" onClick={()=>history.push("/") }/>
            <h1>Login Member</h1>
            <table>
                <tbody>
                    <tr>
                        <th>User_Id</th>
                        <th>Name</th>
                        <th>Email</th>

                    </tr>
                    {loginUsers.map((user)=>
                    <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        </tr>)}

                </tbody>
            </table>
            </center>
        </div>
    )
}

export default LoginMemberUsers
