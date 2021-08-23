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
import EditForm from "./EditForm"
import AddPost from "./AddPost"
import ShowPosts from "./ShowPosts"
import LoginMemberUsers from "./LoginMemberUsers";
import MyPost from "./MyPost"
import Comments from "./Comments"
import Search from "./Search";
import AddComment from "./AddComment"
import AddTask from "./AddTask"
import ShowTasks from "./ShowTasks"
const PrivateRoute = (props) => {
  const { token } = useSelector((state)=>state.regReducer)
  console.log("authLogin", token);

  return token ? (
    <Route {...props} />
  ) : (
    <Redirect to={{pathname: "/signin"}}/>) }

function Routes() {
    const { token } = useSelector((state)=>state.regReducer)


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
          <Link to="/users">Users</Link>
        </li>

      </ul>
      <Switch>
        <PrivateRoute path="/users" component={Users} />
        <PrivateRoute path="/addform" component={AddForm} />
        <PrivateRoute path="/editform" component={EditForm} />
        <PrivateRoute path="/loginmemberusers" component={LoginMemberUsers} />
        <PrivateRoute path="/addpost" component={AddPost} />
        <PrivateRoute path="/showposts" component={ShowPosts} />
        <PrivateRoute path="/mypost" component={MyPost} /> 
        <PrivateRoute path="/comments" component={Comments} /> 
        <PrivateRoute path="/addcomment" component={AddComment} /> 
        <PrivateRoute path="/search" component={Search} /> 
        <PrivateRoute path="/addtask" component={AddTask} />
        <PrivateRoute path="/showtasks" component={ShowTasks} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup"component={SignUp}/>
        <Route path="/">Home</Route>
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
