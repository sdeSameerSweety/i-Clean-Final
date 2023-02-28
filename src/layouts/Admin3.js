import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import Sidebar from "components/Sidebar/Sidebar.js";
// import Sidebar2 from "components/Sidebar/Sidebar2.js";
import Sidebar3 from "components/Sidebar/Sidebar3";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

// import Dashboard from "views/admin/Dashboard.js";
// import Dashboa/rd2 from "views/admin/Dashboard2";
import Dashboard3 from "views/admin/Dashboard3";
// import Maps from "views/admin/Maps.js";
import App from "components/Maps/maps";
import Settings from "views/admin/Settings.js";
// import Tables from "views/admin/Tables.js";
// import Tables2 from "views/admin/Tables2";
import Tables3 from "views/admin/Tables3";
import Make_leave from "views/admin/make_leave";
import QrCode from "views/admin/qrcode";
// import Login2 from "../../../user/src/views/auth/Login.js"

export default function Admin3() {
  return (
    <>
      <Sidebar3 />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            {/* <Route path="/admin/dashboard" exact component={Dashboard} /> */}
            {/* <Route path="/admin/dashboard2" exact component={Dashboard2} />*/}
            <Route path="/admin3/dashboard3" exact component={Dashboard3} />
            <Route path="/admin3/maps" exact component={App} />
            <Route path="/admin3/settings" exact component={Settings} />
            <Route path="/admin3/make_leave" exact component={Make_leave} />
            <Route path="/admin3/qrcode" exact component={QrCode} />
            {/* <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/tables2" exact component={Tables2} /> */}
            <Route path="/admin3/tables3" exact component={Tables3} />
            <Redirect from="/admin3" to="/admin3/dashboard3" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
