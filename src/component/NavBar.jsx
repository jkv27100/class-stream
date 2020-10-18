import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../css/navbar.css";

export default function NavBar(props) {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
    window.location.reload();
  };
  return (
    <div>
      <div className="appbar">
        <div className="nav">
          <NavLink to="/home" className="home" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/subjects" className="link" activeClassName="active">
            Subjects
          </NavLink>
          <div className="login">
            {!localStorage.getItem("isLoggedIn") && (
              <NavLink className="link" to="/login" activeClassName="active">
                Login
              </NavLink>
            )}
            {localStorage.getItem("isLoggedIn") && (
              <Button onClick={handleLogout} color="secondary">
                LogOut
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
