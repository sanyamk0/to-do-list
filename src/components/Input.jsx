import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Task from "./Task";

const Input = () => {
  const [Item, setItem] = useState("");
  const [task, setTask] = useState([]);

  // function for any change in main input
  const changed = (event) => {
    setItem(event.target.value);
  };

  // function for adding tasks
  const Add = () => {
    setTask((oldItems) => {
      const allInputData = { id: new Date().getTime().toString(), name: Item };
      return [...oldItems, allInputData];
    });
    setItem(""); // setting input tag value null so that new task can be added
  };

  // function for deleting tasks
  const deleteitems = (id) => {
    setTask((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  // function for editing tasks
  const editItems = (id, updatedTask) => {
    setTask((oldItems) => {
      return oldItems.map((arrElem, index) => {
        if (index === id) {
          return { ...arrElem, name: updatedTask };
        }
        return arrElem;
      });
    });
  };

  // function for adding task and page not to be refreshed
  const submitPrevent = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="input-add">
        <form onSubmit={submitPrevent}>
          <input
            type="text"
            placeholder="Take a note..."
            value={Item}
            onChange={changed}
          />
          <button className="add-button" title="Add Task" onClick={Add}>
            <AddIcon />
          </button>
        </form>
      </div>
      {/*a line inserted to make partition*/}
      <div className="line" />
      <div className="cards-container">
        {/* mapping is done in task array to render task cards */}
        {task.map((val, index) => {
          return (
            <Task
              key={val.id}
              id={index}
              list={val.name}
              delete={deleteitems}
              edit={editItems}
            />
          );
        })}
      </div>
    </>
  );
};

export default Input;
