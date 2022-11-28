import React, { useState } from "react";
import "./Ticket.scss";

const Ticket = ({ data }) => {
  const [showSubTasks, setShowSubTasks] = useState(false);

  function toggleShow() {
    setShowSubTasks(!showSubTasks);
  }

  return (
    <div onClick={toggleShow} className="ticket">
      <h3 className="heading-m">{data.title}</h3>
      <p className="body-m">{data.description}</p>
      <p className="body-m">{data.tasks.length} subtasks</p>
      <ul>
        {showSubTasks &&
          data.tasks.map((task) => {
            return <li>{task.task}</li>;
          })}
      </ul>
    </div>
  );
};

export default Ticket;
