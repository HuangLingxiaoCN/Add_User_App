import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    // Validate the form inputs
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      // convert age into a number
      return;
    }
    console.log(username, age);
    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
