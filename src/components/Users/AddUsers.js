import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || +enteredAge < 1) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter valid name and age (non-empty values).',
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  };

  const changeUsernameHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const changeAgeHandler = (e) => {
    setEnteredAge(e.target.value);
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
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={changeUsernameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={changeAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
