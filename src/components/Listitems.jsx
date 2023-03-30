import React, { useState } from "react";
import "../styles/Listitems.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Listitems = (props) => {
  const [line, setline] = useState(false);

  const cutItems = (id) => {
    setline(true);
  };
  return (
    <>
      <div className="list_items">
        <button
          className="delete_button"
          title="Delete Task"
          onClick={cutItems}
        >
          <DeleteIcon />
        </button>
        <li
          style={{
            textDecoration: line ? "line-through" : "none",
          }}
        >
          {props.list}
        </li>
      </div>
    </>
  );
};
export default Listitems;
