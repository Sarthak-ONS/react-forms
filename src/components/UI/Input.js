import React from "react";
import classes from "./Input.module.css";

import { FaBeer, FaPen } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const Input = (props) => {
  return (
    <div>
      {props.title === "Password" && <MdLockOutline className={classes.icon} />}
      {props.title === "Username" && <FaPen className={classes.icon} />}
      <input placeholder={props.title} />{" "}
    </div>
  );
};

export default Input;
