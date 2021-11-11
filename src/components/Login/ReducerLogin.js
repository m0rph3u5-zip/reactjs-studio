import React, { useState, useReducer, useEffect, useRef } from "react";

import Card from '../UI/Card/Card';
import classes from './ReducerLogin.module.css';
import Button from '../UI/Button/Button';
import Input from "../UI/Input/Input";

const ReducerEmail = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
}
const ReducerPassword = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: '', isValid: false };
}

const ReducerLogin = (props) => {
    const [emailState, dispatchEmail] = useReducer(ReducerEmail, { value: '', isValid: null });
    const [passwordState, dispatchPassword] = useReducer(ReducerPassword, { value: '', isValid: null })
    const [formIsValid, setFormIsValid] = useState()
    const refEmail = useRef();
    const refPassword = useRef();

    useEffect(() => {
        const formIsValid = emailState.isValid && passwordState.isValid;
        setFormIsValid(formIsValid);
    }, [emailState, passwordState]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', value: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_INPUT', value: event.target.value });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR', savino: 'ciao' });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR', savino: 'ciao' });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            props.onLogin(emailState.value, passwordState.value);
        } else if (!emailState.isValid) {
            refEmail.current.focus();
        } else {
            refPassword.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={refEmail}
                    id="email"
                    type="email"
                    label="E-Mail"
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <Input
                    ref={refPassword}
                    id="password"
                    type="password"
                    label="Your Password"
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
}

export default ReducerLogin;