import React from "react";
import { Route, RouteProps } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const AppRoutes: React.FC<RouteProps> = () => {
  return (
      <Route path="/dashboard" component={Dashboard} />
  );
};

export default AppRoutes;
