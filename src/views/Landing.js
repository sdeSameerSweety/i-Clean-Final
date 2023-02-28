import React from "react";
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet';
import { useEffect } from "react";
// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import "./style.css"
import "./enter.css"
import "./dropdown.css"
export default function Landing() {
  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add('body');
  },[])
  
  return (
    <>
    <Helmet>
              <link href="./dropdown.css" rel="stylesheet"/>
            </Helmet>
            <div class="bodykk">
      <div id="overlay"><h1 class="anim"><pre class="head">WELCOME 2<h1 class="logo">i-CLEAN</h1></pre></h1></div>
        <div id="hey"><div id="layer-up"></div></div>
        <div id="layer-0">
          
          <div id="layer-1">
            
            <div id="layer-2">
              <div id="lines">
                <div id="layer-corner"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="mtnZZZ"></div>
        <div>
        <div class="trapdoor">
            <div class="top door">
              <img className="imgcls" src="./veclogo.png" alt="" width="120" height="100" />
            </div>
            <div class="bottom door">
              <div class="anim2">
            <p class="text" >Enter i-Clean</p>
            </div>
            </div>
            
            <nav class="menu">
              <ol>
                <li class="menu-item">
                  <a href="#0">Log__in</a>
                  <ol class="sub-menu">
                    <li class="menu-item"><a href="#0">Admin</a></li>
                    <li class="menu-item"><a href="/auth/login1">Admin</a></li>
                    <li class="menu-item"><a href="/auth/login2">Customer</a></li>
                    <li class="menu-item"><a href="/auth/login3">Worker</a></li>
                  </ol>
                </li>
                <li class="menu-item">
                  <a href="#0">Sign__UP</a>
                  <ol class="sub-menu">
                    <li class="menu-item"><a href="#0">Customer</a></li>
                    <li class="menu-item"><a href="/auth/register2">Customer</a></li>
                    <li class="menu-item"><a href="/auth/register3">Worker</a></li>
                    {/* <li class="menu-item"><a href="#0">Summer kabobs</a></li> */}
                  </ol>
                </li>
              </ol>
            </nav>
            <Helmet>
          <script
          src="./scripts.js"
          crossorigin="anonymous"
          async></script>
          </Helmet>
          </div>
        </div>
        </div>
      </>
  );
}
