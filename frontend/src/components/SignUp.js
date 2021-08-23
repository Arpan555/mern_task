import React,{useState} from 'react'
import {Link,useHistory} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { requestsignup } from '../Thunk'

const SignUp = () => {
    const [signupForm,setSignupForm]=useState({name:'',email: '', password: ''})
    const dispatch = useDispatch()
    const history=useHistory()
    
    const {name,email,password}=signupForm;
    const handleInputData=(e)=>{
        let {name,value}=e.target;
        setSignupForm({...signupForm,[name]:value})

    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(requestsignup(signupForm));
        history.push("/signin")
       }
    return (
        <div>
            <center>
            <h1>SignUp </h1>
          <form method="POST" onSubmit={handleSubmit}>
            <label htmlFor="html">Name: </label> &nbsp;&nbsp;
            <input type="text" name="name" onChange={handleInputData}/><br/><br/>
            <label htmlFor="html">Email: </label> &nbsp;&nbsp;
            <input type="email" name="email" onChange={handleInputData}/><br/><br/>
            <label htmlFor="html">Password: </label> &nbsp;&nbsp;
            <input type="password" name="password" onChange={handleInputData}/><br/><br/>
            <input type="submit" value="SignUp"/>
            <p>Don't have an account? <span> <Link to="/signin">Sign In</Link></span></p>
       </form>
       </center>
        </div>
    )
}

export default SignUp
