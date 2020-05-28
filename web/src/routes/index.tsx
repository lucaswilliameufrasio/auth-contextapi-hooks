import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { useAuth } from "../contexts/auth";

import Header from '../components/Header/index';

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return (
    <Router>
      <Header />
      <Switch>{signed ? <AppRoutes /> : <AuthRoutes />}</Switch>
    </Router>
  );
};

export default Routes;
