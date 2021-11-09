import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import { v4 as uuidv4 } from 'uuid';

const NewExpensive = (props) => {
    const [isEditMode, setIsEditMode] = useState(false);

    const saveExpenseDataHandler = (data) => {
        const expense = {
            ...data,
            id: uuidv4()
        }
        props.onAddExpense(expense);
        setIsEditMode(false);
    }

    const toggleEditFormHandler = (status) => () => {
        setIsEditMode(status);
    }

    return (
        <div className='new-expense'>
            {!isEditMode && (
                <button onClick={toggleEditFormHandler(true)}>Add New Expense</button>
            )}
            {isEditMode && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={toggleEditFormHandler(false)}
                />
            )}
        </div>
    )
}

export default NewExpensive