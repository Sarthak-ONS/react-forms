import React from "react";

import classes from "./SignupForm.module.css";
import Input from "../../UI/Input";

import Button from "../../UI/Button";

const SignupFormCard = () => {
  return (
    <div className={classes["signup-form"]}>
      <div className={classes["signup-form-img"]}>
        <div></div>
        <svg
          className={classes["signup-form-img-svg"]}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
        </svg>
      </div>
      <div className={classes["signup-form-content"]}>
        <div className={classes["signup-form-heading"]}>
          Sign up to experience the most<br></br> efficeient way of
          cummunication
        </div>
        <Input title="Username"></Input>
        <Input title="Username"></Input>
        <Input title="Password"></Input>
      </div>

      <div className={classes.actions}>
        <Button backgroundColor="#f2ad18">Let's rock!</Button>
        <div className={classes["already-heading"]}>
          I already have an account
        </div>
      </div>
    </div>
  );
};

export default SignupFormCard;
