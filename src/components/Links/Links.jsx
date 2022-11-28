import React from "react";
import "./Links.scss";
import BoardIcon from "../../assets/icon/IconBoard";

const Links = () => {
  return (
    <ul className="links">
      <li>
        <BoardIcon />
        Place board
      </li>
      <li className="active">
        <BoardIcon />
        Abc project
      </li>
    </ul>
  );
};

export default Links;
