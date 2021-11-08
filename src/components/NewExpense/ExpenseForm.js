import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');

    const handlerTitle = (e) => {
        setTitle(e.target.value);
    }
    const handlerAmount = (e) => {
        setAmount(e.target.value);
    }
    const hadlerDate = (e) => {
        setDate(e.target.value);
    }

    const submitHalder = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            amount: amount,
            date: new Date(date)
        };
        setTitle('');
        setAmount(0);
        setDate('');
        props.onSaveExpenseData(data);
    }

    return (
        <form onSubmit={submitHalder}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={handlerTitle}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        value={amount}
                        min='0.01'
                        step='0.01'
                        onChange={handlerAmount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        value={date}
                        min='2019-01-01'
                        max='2022-12-31'
                        onChange={hadlerDate}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
