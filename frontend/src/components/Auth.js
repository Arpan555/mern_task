import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../redux/actions/allactions';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  
  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(form, history));
      
    } else {
      dispatch(signin(form, history));
    }
    
  };



  return (
        <div>
        <h2>{ isSignup ? 'Sign up' : 'Sign in' }</h2>
        <form onSubmit={handleSubmit}>
            { isSignup && (
            <div>
                <label>First Name:</label>
              <input name="firstName" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })}/><br/><br/>
              <label>Last Name:</label>
              <input name="lastName" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} /><br/><br/>
            </div>
            )}
            <label>Email:</label>
            <input name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" /><br/><br/>
            <label>Password</label>
            <input name="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} type="password"  /><br/><br/>
            
            { isSignup && 
            <div>
            <label> ConfirmPassword: </label>
            <input name="confirmPassword" value={form.confirmPassword}  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} type="password" /> <br/><br/></div>}
          <input type="submit"  value={ isSignup ? 'Sign Up' : 'Sign In' }/><br/><br/>
          <input type="submit" onClick={switchMode} value={ isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }/>

</form>
    
   

       
        </div>
      );
};

export default SignUp;
