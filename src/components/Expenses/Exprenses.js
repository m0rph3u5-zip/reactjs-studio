import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'

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
            <ExpenseItem
                id={props.items[0].id}
                date={props.items[0].date}
                title={props.items[0].title}
                amount={props.items[0].amount}
            />
            <ExpenseItem
                id={props.items[1].id}
                date={props.items[1].date}
                title={props.items[1].title}
                amount={props.items[1].amount}
            />
            <ExpenseItem
                id={props.items[2].id}
                date={props.items[2].date}
                title={props.items[2].title}
                amount={props.items[2].amount}
            />
            <ExpenseItem
                id={props.items[3].id}
                date={props.items[3].date}
                title={props.items[3].title}
                amount={props.items[3].amount}
            />
        </div>
    )
}

export default Exprenses
