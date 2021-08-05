import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AddForm from "./components/AddForm";
import Users from "./components/Users";
import { getUsers } from "./redux/actions/allactions";

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUsers());
    }, [currentId, dispatch]);
    
  return (
    <div>
      <center>
        <h1>CRUD with react-redux-thunk and node mongo</h1>
        <hr />
        <AddForm currentId={currentId} setCurrentId={setCurrentId} />
        <hr />
        <h2>List Of Users</h2>
        <Users setCurrentId={setCurrentId} />
      </center>
    </div>
  );
}

export default App;
