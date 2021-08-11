import React from "react";
import { useSelector } from "react-redux";
import {
  Link,
  Route,
  Switch,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import AddForm from "./AddForm";
import Users from "./Users";
import SignIn from "./SignIn";
import PageNotFound from "./PageNotFound";
import SignUp from "./SignUp"

const PrivateRoute = (props) => {
  const { token } = useSelector((state)=>state.regReducer.token)
  console.log("authLogin", token);

  return token ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/signin"
      }}
    />
  );
};

function Routes() {
    const { token } = useSelector((state)=>state.regReducer.token)
  
  
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!token && (
          <li>
            <Link to="/signin">Login</Link>
          </li>
        )}
        <li>
          <Link to="/Users">Users</Link>
        </li>
        <li>
          <Link to="/addform">AddForm</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute path="/users" component={Users} />
        <PrivateRoute path="/addform" component={AddForm} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup"component={SignUp}/>
        <Route path="/">Home</Route>
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;