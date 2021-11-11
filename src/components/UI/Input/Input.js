import react from "react";
import React, { useRef, useImperativeHandle } from "react";

import classes from './Input.module.css';

const Input = react.forwardRef((props, ref) => {
    const refInput = useRef();

    const activate = () => {
        refInput.current.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            focus: activate,
        };
    });

    return (
        <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`} >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={refInput}
                type={props.type}
                id={props.id}
                value={props.enteredEmail}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
});

export default Input;