import React, { useState, useContext } from "react";
import "./CreateTicket.scss";
import { BoardContext } from "../../context/BoardContext";
import { v4 as uuidv4 } from "uuid";

export default function CreateTicket() {
  const { createTicket } = useContext(BoardContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtask, setSubtask] = useState("");

  return (
    <div className="pop-up-ticket">
      <h3 className="heading-l">Add New Ticket</h3>
      <div>
        <label htmlFor="" className="body-m">
          Title
        </label>
        <input
          placeholder="e.g take coffe break"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="" className="body-m">
          Description
        </label>
        <input
          placeholder="e.g take a coffe with friend on monday"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="" className="body-m">
          Sub Task
        </label>
        <input
          placeholder="e.g do backflip"
          type="text"
          value={subtask}
          onChange={(e) => setSubtask(e.target.value)}
        />
      </div>

      <button
        onClick={() => {
          createTicket({
            id: uuidv4(),
            title: title,
            description: description,
            tasks: [subtask],
          });
          setTitle("");
          setDescription("");
          setSubtask("");
        }}
      >
        Create Task
      </button>
    </div>
  );
}
