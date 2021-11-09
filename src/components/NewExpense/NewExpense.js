import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import { v4 as uuidv4 } from 'uuid';

const NewExpensive = (props) => {
    const saveExpenseData = (data) =>{
        const expense = {
            ...data,
            id: uuidv4()
        }
        props.onAddExpense(expense)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseData}/>
        </div>
    )
}

export default NewExpensive