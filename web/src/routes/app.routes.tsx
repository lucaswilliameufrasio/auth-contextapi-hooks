import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const AppRoutes: React.FC<RouteProps> = () => {
  return (
    <>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="*" exact render={() => <Redirect to="/dashboard" />} />
    </>
  );
};

export default AppRoutes;
