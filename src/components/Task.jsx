import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

const Task = (props) => {
  const [isEditing, setIsEditing] = useState(false); // useState for toggling edit form
  const [updatedTask, setUpdatedTask] = useState(props.list); //useState for updated value of task

  // function for any change in edit input
  const handleEditChange = (event) => {
    setUpdatedTask(event.target.value);
  };

  // function for submitting form and again toggle off the edit form
  const handleEditSubmit = (event) => {
    event.preventDefault();
    props.edit(props.id, updatedTask);
    setIsEditing(false);
  };

  return (
    <>
      <div className="card">
        <div className="title">
          <h5>Task {props.id + 1}</h5>
          <div className="icons">
            <button
              className="edit"
              onClick={() => setIsEditing(true)} //by clicking on this button we toggle open the form
              title="Edit Item"
            >
              <EditIcon />
            </button>
            <button
              className="delete"
              onClick={() => props.delete(props.id)}
              title="Delete Item"
            >
              <DeleteIcon />
            </button>
          </div>
        </div>

        {isEditing ? (
          <form onSubmit={handleEditSubmit}>
            <input
              type="text"
              value={updatedTask}
              onChange={handleEditChange}
              className="edit-input"
            />
            <button type="submit" className="edit-done">
              <DoneIcon />
            </button>
          </form>
        ) : (
          <div className="task">
            <p>{props.list}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Task;
