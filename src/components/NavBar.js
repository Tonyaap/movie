import React from "react";
import { NavLink } from "react-router-dom";

export default function navbar() {
  return (
    <div className="nav">
      <NavLink
        to="/"
        exact={true}
        activeStyle={{ fontWeight: "bold", color: "red" }}
      >
        {" "}
        Home{" "}
      </NavLink>
      <NavLink to="/about" activeStyle={{ fontWeight: "bold", color: "red" }}>
        {" "}
        About{" "}
      </NavLink>
      <NavLink to="/users" activeStyle={{ fontWeight: "bold", color: "red" }}>
        Users
      </NavLink>
      <NavLink
        to="/discover"
        activeStyle={{ fontWeight: "bold", color: "red" }}
      >
        Discover
      </NavLink>
    </div>
  );
}
