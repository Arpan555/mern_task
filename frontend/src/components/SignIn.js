import React,{useState} from "react";
import {Link,useHistory} from "react-router-dom"
import {requestsignin} from "../Thunk.js"
import {useDispatch} from "react-redux"
const SignIn = () => {
  const [signinForm,setSigninForm]=useState({email: '', password: ''})
     const dispatch = useDispatch()
     const history=useHistory()
    
    const {email,password}=signinForm;
    const handleInputData=(e)=>{
        let {name,value}=e.target;
        setSigninForm({...signinForm,[name]:value})

    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(signinForm.email,signinForm.password)
        dispatch(requestsignin(signinForm));
        history.push("/users")
        setSigninForm({email: '', password: ''})

       }
  return (
    <div>
      <center>
        <h1>Login</h1>
        <form method="POST" onSubmit={handleSubmit}>
          <label htmlFor="html">Email: </label> &nbsp;&nbsp;
          <input type="text" name="email" onChange={handleInputData}/><br/><br/>
          <label htmlFor="html">Password: </label> &nbsp;&nbsp;
          <input type="password" name="password" onChange={handleInputData}/><br/><br/>
          <input type="submit" value="Login"/>
          <p>Don't have an account? <span> <Link to="/signup">Sign Up</Link></span></p>
        </form>
      </center>
    </div>
  );
};

export default SignIn;
