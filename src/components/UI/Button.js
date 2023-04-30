import React from "react";
import classes from "./Button.module.css";

const imgUrl = "";

const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: `${props.backgroundColor}`,
        color: "black",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
