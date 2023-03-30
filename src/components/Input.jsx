import React, { useState } from "react";
import "../styles/Input.css";
import Listitems from "./Listitems";
import AddIcon from "@mui/icons-material/Add";

const Input = () => {
  const [Item, setItem] = useState("");
  const [ItemArr, setItemArr] = useState([]);

  const changed = (event) => {
    setItem(event.target.value);
  };

  const Add = () => {
    if (Item === "") {
      alert("Please Enter Task");
    } else {
      setItemArr((oldItems) => {
        return [...oldItems, Item];
      });
      setItem("");
    }
  };

  // Codes below is to completely delete list item

  // const deleteitems = (id) => {
  //   setItemArr((oldItems) => {
  //     return oldItems.filter((arrElem, index) => {
  //       return index !== id;
  //     });
  //   });
  // };

  // const deleteitems = (id) => {
  //   const response = window.confirm("Are you sure you want to delete?");
  //   if (response === true) {
  //     setItemArr((oldItems) => {
  //       return oldItems.filter((arrElem, index) => {
  //         return index !== id;
  //       });
  //     });
  //   } else {
  //     setItemArr((oldItems) => {
  //       return [...oldItems];
  //     });
  //   }
  // };

  return (
    <>
      <div className="input_add">
        <input
          type="text"
          placeholder="Add New Task"
          value={Item}
          onChange={changed}
        />
        <button className="add_button" title="Add Task" onClick={Add}>
          <AddIcon />
        </button>
      </div>

      <div className="ordered_list">
        <ol>
          {ItemArr.map((val, index) => {
            return <Listitems key={index} id={index} list={val} />;
          })}
        </ol>
      </div>
    </>
  );
};
export default Input;
