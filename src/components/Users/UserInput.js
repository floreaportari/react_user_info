import styles from "./UserInput.module.css";
import { useState, useRef } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState();

  // const userNameHandler = (e) => {
  //   setUsername(e.target.value);
  // };
  // const ageHandler = (e) => {
  //   setAge(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (no empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    // setUsername("");
    // setAge("");

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form className={styles.formControl} onSubmit={submitHandler}>
        <div className={styles.inputControl}>
          <label>Username</label>
          <input
            type="text"
            // value={username}
            // onChange={userNameHandler}
            ref={nameInputRef}
          />
        </div>
        <div className={styles.inputControl}>
          <label>Age (Years)</label>
          <input
            type="number"
            // value={age}
            // onChange={ageHandler}
            ref={ageInputRef}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </>
  );
};

export default UserInput;
