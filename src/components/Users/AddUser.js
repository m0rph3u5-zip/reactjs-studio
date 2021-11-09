import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.models.css';

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState();
    const [invalidForm, setInvalidForm] = useState(false);

    const usernamaChangeHandler = (e) => {
        setUsername(e.target.value);
        setInvalidForm(false);
    }

    const ageChangeHandler = (e) => {
        setAge(e.target.value);
        setInvalidForm(false);
    }

    const addUserHandler = (e) => {
        e.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setInvalidForm(true);
            return;
        }
        if (+age < 1) {
            setInvalidForm(true);
            return;
        }

        setUsername('');
        setAge('');

        props.onAddUser(username, age);
        setInvalidForm(false);
    }

    return (
        <Card>
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
                {invalidForm && <span>Impossibile inviare il form</span>}
            </form>
        </Card>
    )
}

export default AddUser;