import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

import './Expenses.css';

function Exprenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filteredItems = props.items.filter(i => i.date.getFullYear().toString() === filteredYear);

    const handlerChangeSelection = year => {
        setFilteredYear(year);
    }

    return (
        <div className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeSelection={handlerChangeSelection}
            />
            <ExpenseChart items={filteredItems} />
            <ExpenseList items={filteredItems}/>
        </div>
    )
}

export default Exprenses;
