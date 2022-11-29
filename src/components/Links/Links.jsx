import React, { useContext, useState } from "react";
import "./Links.scss";
import BoardIcon from "../../assets/icon/IconBoard";
import { BoardContext } from "../../context/BoardContext";

export default function Links() {
  const { projects, currentProject, changeBoard, addNewProject } =
    useContext(BoardContext);
  const [value, setValue] = useState("");
  console.log(projects);

  return (
    <ul className="links">
      {projects.map((project, index) => {
        return (
          <li
            key={index}
            className={currentProject.id === project.id ? "active" : ""}
            onClick={() => changeBoard(index)}
          >
            <BoardIcon />
            {project.title}
          </li>
        );
      })}
      <li className="new-project">
        <BoardIcon />
        +Create new board
      </li>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          addNewProject(value);
        }}
      >
        Add project
      </button>
    </ul>
  );
}
