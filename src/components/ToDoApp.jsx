import React from "react";
import "../styles/ToDoApp.css";
import Heading from "./Heading";
import Input from "./Input";

const ToDoApp = () => {
  return (
    <>
      <div className="outer">
        <div className="container">
          <Heading />
          <Input />
        </div>
      </div>
    </>
  );
};
export default ToDoApp;
