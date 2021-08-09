import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/allactions';
import Users from './Users';
import AddForm from './AddForm';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUsers());
  }, [currentId, dispatch]);

  return (
    <div>
        <AddForm currentId={currentId} setCurrentId={setCurrentId}/>
        <h3>User Details</h3>
        <Users setCurrentId={setCurrentId}/>
            
      </div>
  );
};

export default Home;
