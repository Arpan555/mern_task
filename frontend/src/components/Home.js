import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/allactions';
import Users from './Users';
import AddForm from './AddForm';

const Home = () => {
  // const [currentId, setCurrentId] = useState(0);
  // const dispatch = useDispatch();
  //
  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [currentId, dispatch]);

  return (
    <div>
// component={Users setCurrentId={setCurrentId}}
//  component={AddForm currentId={currentId} setCurrentId={setCurrentId}}
            <input type="button" value="users"/>  <br/><br/>
            <input type="button" value="add users" />

      </div>
  );
};

export default Home;
