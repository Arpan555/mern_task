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

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };



  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
        <div>
        <h2>{ isSignup ? 'Sign up' : 'Sign in' }</h2>
        <form onSubmit={handleSubmit}>
            { isSignup && (
            <div>
                <label>First Name:</label>
              <input name="firstName"  handleChange={handleChange}/>
              <label>Last Name:</label>
              <input name="lastName"  handleChange={handleChange} />
            </div>
            )}
            <label>Email:</label>
            <input name="email"  handleChange={handleChange} type="email" />
            <label>Password</label>
            <input name="password"  handleChange={handleChange} type="password" handleShowPassword={handleShowPassword} />
            { isSignup && <input name="confirmPassword"  handleChange={handleChange} type="password" /> }
          <button type="submit" value={ isSignup ? 'Sign Up' : 'Sign In' }/>

            )}

              <button onClick={switchMode} value={ isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }/>


        </form>
        </div>
      );
};

export default SignUp;
