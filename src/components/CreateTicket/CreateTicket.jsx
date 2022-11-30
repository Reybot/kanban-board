import React, { useState, useContext } from "react";
import "./CreateTicket.scss";
import { BoardContext } from "../../context/BoardContext";

const CreateTicket = () => {
  const { createTicket } = useContext(BoardContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtask, setSubTask] = useState("");

  return (
    <div className="pop-up-ticket">
      <h3 className="heading-l">Add New Ticket</h3>
      <div>
        <label className="body-m" htmlFor="">
          Title
        </label>
        <input
          placeholder="e.g take coffe break"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="body-m" htmlFor="">
          Description
        </label>
        <input
          placeholder="e.g take coffe break"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="body-m" htmlFor="">
          Sub Task
        </label>
        <input
          placeholder="e.g take coffe break"
          type="text"
          value={subtask}
          onChange={(e) => setSubTask(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          createTicket({
            id: "hej",
            title: title,
            description: description,
            tasks: [subtask],
          });
          setTitle("");
          setDescription("");
          setSubTask("");
        }}
      >
        Create Task
      </button>
    </div>
  );
};

export default CreateTicket;
