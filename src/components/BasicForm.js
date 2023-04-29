import validateEmail from "../ValidationHelpers/email-validate-helper";
import useCustomInput from "../hooks/use-custom-input-hook";

const BasicForm = (props) => {
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    resetInput: resetEmailInput,
    hasError: emailHasError,
    valueChangeHandler: emailValueChangeHandler,
    valueBlurHandler: emailBlurHandler,
  } = useCustomInput(validateEmail);
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    resetInput: resetFirstNameInput,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameValueChangeHandler,
    valueBlurHandler: firstnameBlurHandler,
  } = useCustomInput((value) => value.trim() !== "");

  const {
    value: enteredSecondName,
    isValid: secondNameIsValid,
    resetInput: resetSecondNameInput,
    hasError: secondNameHasError,
    valueChangeHandler: secondNameValueChangeHandler,
    valueBlurHandler: secondNameBlurHandler,
  } = useCustomInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (emailIsValid && firstNameIsValid && secondNameIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredFirstName, enteredSecondName, enteredEmail);

    resetFirstNameInput();
    resetSecondNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameValueChangeHandler}
            onBlur={firstnameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <p className="error-text">Invalid first name</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            onChange={secondNameValueChangeHandler}
            onBlur={secondNameBlurHandler}
            value={enteredSecondName}
            type="text"
            id="name"
          />
          {secondNameHasError && (
            <p className="error-text">Invalid Second name</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailValueChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">Invalid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
