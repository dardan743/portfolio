import React from "react";
import { Route } from "react-router-dom";
import Navigation from "components/admin/Navigation";
import Sidebar from "components/admin/Sidebar";

const DashboardRoute = ({ isAuth, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (
      <>
        <div className="admin_dashboard">
          <Sidebar />
          <div className="admin_dashboard_content">
            <Navigation />
            <div className="admin_dashboard_content_wrapper">
              <Component {...props} />
            </div>
          </div>
        </div>
      </>
    )}
  />
);

export default DashboardRoute;
