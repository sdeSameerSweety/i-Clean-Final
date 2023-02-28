import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import Sidebar2 from "components/Sidebar/Sidebar2.js";
// import Sidebar3 from "components/Sidebar/Sidebar3";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
// import Dashboard2 from "views/admin/Dashboard2";
// import Dashboard3 from "views/admin/Dashboard3";
import Editable_Map from "components/Maps/maps_admin";
// import App from "components/Maps/maps";
import Settings from "views/admin/Settings.js";
// import Tables from "views/admin/Tables.js";
import Tables_Complaint from "views/admin/Table_complaint";
import Table_Leave from "views/admin/Table_leave";
import Table_User from "views/admin/Table_user";
import Tables_Worker from "views/admin/Table_worker";
import AllPickupTable from "components/Cards/all_pickup_schedule";
// import Tables2 from "views/admin/Tables2";
// import Tables3 from "views/admin/Tables3";
// import Login2 from "../../../user/src/views/auth/Login.js"

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            {/* <Route path="/admin/dashboard2" exact component={Dashboard2} />
            <Route path="/admin/dashboard3" exact component={Dashboard3} /> */}
            <Route path="/admin/maps" exact component={Editable_Map} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/table_user" exact component={Table_User} />
            <Route path="/admin/table_worker" exact component={Tables_Worker} />
            <Route path="/admin/table_complaint" exact component={Tables_Complaint} />
            <Route path="/admin/table_leave" exact component={Table_Leave} />
            <Route path="/admin/all_pickups" exact component={AllPickupTable} />
            {/* <Route path="/admin/tables2" exact component={Tables2} />
            <Route path="/admin/tables3" exact component={Tables3} /> */}
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
