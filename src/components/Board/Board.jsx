import React from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";

const subTasks = [
  {
    task: "Tjeena",
  },
  {
    task: "Tjabaa",
  },
];

const testTicket = {
  title: "Firstone",
  description: "Description",
  tasks: subTasks,
};

const Board = () => {
  return (
    <div className="board">
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon Todo"></div>
          <h4 className="heading-s">Todo</h4>
        </div>
        <Ticket data={testTicket} />
      </div>
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon Doing"></div>
          <h4 className="heading-s">Doing</h4>
        </div>
        <Ticket data={testTicket} />
      </div>
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon Done"></div>
          <h4 className="heading-s">Done</h4>
        </div>
        <Ticket data={testTicket} />
      </div>
    </div>
  );
};

export default Board;
