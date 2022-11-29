import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";
import Ticket from "../Ticket/Ticket";
import "./Board.scss";

const subTasks = [
  {
    task: "Tjeena",
  },
  {
    task: "Tjabaa",
  },
];

const testTicket = {
  title: "FirstoneIsTheBestOne",
  description: "Description",
  tasks: subTasks,
};

const Board = () => {
  const { currentProject } = useContext(BoardContext);

  return (
    <div className="board">
      {currentProject.board.map((column) => {
        return (
          <div className="board-column">
            <div className="board-title">
              <div className={`board-title-icon ${column.name}`}></div>
              <h4 className="heading-s">{column.name}</h4>
            </div>
            {column.tickets.map((ticket) => {
              return <Ticket data={ticket} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
