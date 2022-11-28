import React from "react";
import Links from "../Links/Links";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p>All boards ( 2 )</p>
      <Links />
    </div>
  );
};

export default Sidebar;
