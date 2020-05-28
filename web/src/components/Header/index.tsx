import React from "react";

import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import "./styles.css";

const Header: React.FC = () => {
  let history = useHistory();
  const { signed, signOut } = useAuth();

  function handleSignOut() {
    signOut();
    history.push("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {signed ? (
        <>
          <NavLink
            exact
            className="nav-item nav-link"
            activeClassName="active"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            activeClassName="active"
            onClick={handleSignOut}
            to="/login"
          >
            Sign Out
          </NavLink>
        </>
      ) : (
        <NavLink
          className="nav-item nav-link"
          activeClassName="active"
          to="/login"
        >
          Sign In
        </NavLink>
      )}
    </nav>
  );
};

export default Header;
