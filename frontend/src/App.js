import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AddForm from "./components/AddForm";
import Users from "./components/Users";
import { getUsers } from "./redux/actions/allactions";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from "./components/Auth"
import Home from "./components/Home"
const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUsers());
    }, [currentId, dispatch]);

  return (
    <div>
      <BrowserRouter>
      <center>
        <h1>CRUD with react-redux-thunk and node mongo</h1>
        <hr />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
        <hr />
      </center>
      </BrowserRouter>
    </div>
  );
}

export default App;
