import React from "react";
import { Route, RouteProps } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const AppRoutes: React.FC<RouteProps> = () => {
  return (
      <Route exact path="/" component={Dashboard} />
  );
};

export default AppRoutes;
