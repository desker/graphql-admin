import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./containers/App";
import UserList from "./containers/UserList";
import User from "./containers/User";
import NotFound from "./containers/NotFound";

// build the router
const router = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={UserList}/>
      <Route path="/user(/:userId)" component={User}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
