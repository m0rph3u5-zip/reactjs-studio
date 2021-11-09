import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter';

function Exprenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const handlerChangeSelection = year => {
        setFilteredYear(year);
    }

    return (
        <div className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeSelection={handlerChangeSelection}
            />
            {props.items.map(expense => {
                return <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                />
            })}
        </div>
    )
}

export default Exprenses
