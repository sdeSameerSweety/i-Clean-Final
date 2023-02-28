import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Admin2 from "layouts/Admin2";
import Admin3 from "layouts/Admin3";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Loading from "views/Loading.js";
// import Landing2 from "landing/Landing2.js";
// import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/admin2" component={Admin2} />
      <Route path="/admin3" component={Admin3} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      {/* <Route path="/landing2" exact component={Landing2} /> */}
      <Route path="/profile" exact component={Profile} />
      <Route path="/loading" exact component={Loading} />
      {/* <Route path="/" exact component={Index} /> */}
      {/* add redirect for first page */}
      <Redirect from="*" to="/loading" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
