import React, { useContext } from "react";
import "./Sidebar.scss";
import Links from "../Links/Links";
import { BoardContext } from "../../context/BoardContext";

export default function Sidebar() {
  const { projects } = useContext(BoardContext);

  return (
    <div className="sidebar">
      <p>All board ( {projects.length} )</p>
      <Links />
    </div>
  );
}
