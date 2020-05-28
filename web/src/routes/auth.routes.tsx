import React from "react";
import { Route } from "react-router-dom";
import SignIn from "../pages/SignIn";

const AuthRoutes: React.FC = () => {
  return (
      <Route exact path="/login" component={SignIn} />
  );
};

export default AuthRoutes;
