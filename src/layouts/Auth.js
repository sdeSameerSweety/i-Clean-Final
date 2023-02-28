import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import Login2 from "views/auth/Login2.js";
import Login3 from "views/auth/Login3.js";
import Register from "views/auth/Register.js";
import Register2 from "views/auth/Register2";
import Register3 from "views/auth/Register3";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <Switch>
            <Route path="/auth/login1" exact component={Login} />
            <Route path="/auth/login2" exact component={Login2} />
            <Route path="/auth/login3" exact component={Login3} />
            <Route path="/auth/register" exact component={Register} />
            <Route path="/auth/register2" exact component={Register2} />
            <Route path="/auth/register3" exact component={Register3} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
