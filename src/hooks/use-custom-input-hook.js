import React, { useState } from "react";

const useCustomInput = (validateInput) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [isTouched, setIsTouched] = useState(false);

  const valueisValid = validateInput(enteredValue);

  const valueHasError = !valueisValid && isTouched;

  const resetInput = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    isValid: valueisValid,
    resetInput,
    hasError: valueHasError,
    valueChangeHandler,
    valueBlurHandler,
  };
};

export default useCustomInput;
