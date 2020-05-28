import React from "react";
import { Route } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

const AuthRoutes: React.FC = () => {
  return (
      <>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={SignIn} />
      </>
  );
};

export default AuthRoutes;
