import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createUser, updateUser } from '../redux/actions/allactions';

const Form = ({ currentId, setCurrentId }) => {
  const [userData, setUserData] = useState({ name: '', email: '', city: ''});
  const user = useSelector((state) => (currentId ? state.users.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
 
  useEffect(() => {
    if (user) setUserData(user);
  }, [user]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createUser(userData));
    } else {
      dispatch(updateUser(currentId, userData));
    }
    
  };

  return (
    <div>
       <h2>{currentId ? `Editing "${user.name}"` : 'Create User'}</h2>
        <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} /><br /><br />

        <label htmlFor="city">City:</label>
        <input type="text"  name="city" id="city" value={userData.city} onChange={(e) => setUserData({ ...userData, city: e.target.value })} />
        
        <input type="submit" value={currentId ? 'update' : 'add'}/>

        </form>
    </div>
  );
};

export default Form;