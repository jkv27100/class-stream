import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

export default function NavBar(props) {
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
            {/* <NavLink className="link" to="/login" activeClassName="active">
              Login
            </NavLink> */}
          </div>
        </div>
      </div>
    </div>
  );
}
