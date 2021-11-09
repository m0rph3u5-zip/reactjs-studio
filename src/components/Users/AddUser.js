import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from './AddUser.module.css';

const AddUser = (props) => {
    const errorMessage = {
        title: 'Errore durante il salvataggio',
        message: 'Il form contiene errori.'
    }

    const [username, setUsername] = useState('');
    const [age, setAge] = useState();
    const [error, setError] = useState('');

    const usernamaChangeHandler = (e) => {
        setUsername(e.target.value);
        setError(false);
    }

    const ageChangeHandler = (e) => {
        setAge(e.target.value);
        setError(false);
    }

    const addUserHandler = (e) => {
        e.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError(errorMessage);
            return;
        }
        if (+age < 1) {
            setError(errorMessage);
            return;
        }

        setUsername('');
        setAge('');

        props.onAddUser(username, age);
        setError(false);
    }

    const errorHandler = () => {
        setError(false);
    }

    return (
        <div>
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
                        value={username}
                        onChange={usernamaChangeHandler}
                    />
                    <label htmlFor="age">Età (in anni)</label>
                    <input
                        id="age"
                        type="number"
                        value={age}
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Aggiungi Utente</Button>
                </form>
            </Card>
        </div >
    )
}

export default AddUser;