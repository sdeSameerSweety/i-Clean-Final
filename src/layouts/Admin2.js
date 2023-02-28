import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import Sidebar2 from "components/Sidebar/Sidebar2.js";
import Sidebar2 from "components/Sidebar/Sidebar2.js";
// import Sidebar3 from "components/Sidebar/Sidebar3";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

// import Dashboard from "views/admin/Dashboard.js";
import Dashboard2 from "views/admin/Dashboard2";
// import Dashboard3 from "views/admin/Dashboard3";
import Mapsify from "../components/Maps/maps.js";
import Settings from "views/admin/Settings.js";
// import Tables from "views/admin/Tables.js";
import Tables2 from "views/admin/Tables2";
import Pickup_request from "views/admin/pickup_request.js";
import MakeComplain from "views/admin/complaint.js";
// import Tables3 from "views/admin/Tables3";
// import Login2 from "../../../user/src/views/auth/Login.js"

export default function Admin2() {
  return (
    <>
      <Sidebar2 />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            {/* <Route path="/admin2/dashboard" exact component={Dashboard} /> */}
            <Route path="/admin2/dashboard2/" exact component={Dashboard2} />
            <Route path="/admin2/pickup" exact component={Pickup_request} />
            {/* <Route path="/admin/dashboard3" exact component={Dashboard3} /> */}
            <Route path="/admin2/maps" exact component={Mapsify} />
            <Route path="/admin2/settings" exact component={Settings} />
            {/* <Route path="/admin/tables" exact component={Tables} /> */}
            <Route path="/admin2/tables2" exact component={Tables2} />
            <Route path="/admin2/complain2" exact component={MakeComplain} />
            {/* <Route path="/admin/tables3" exact component={Tables3} /> */}
            <Redirect from="/admin2" to="/admin2/dashboard2" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
