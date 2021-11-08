import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpensive = (props) => {
    const saveExpenseData = (data) =>{
        const expense = {
            ...data,
            id: Math.random()
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