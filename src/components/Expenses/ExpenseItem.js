import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem(props) {
    const [amount, setAmount] = useState(props.amount);
    const clickIncrementHandler = (value) => () => {
        setAmount((p) => {
            return value > 0 ? p + 1 : p - 1;
        });
    }
    return (
        <Card id={props.id} className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{amount}</div>
                <div className="button-group">
                    <button className="tools-button" onClick={clickIncrementHandler(1)}>+</button>
                    <button className="tools-button" onClick={clickIncrementHandler(-1)}>-</button>
                </div>
            </div>
        </Card>
    )
}

export default ExpenseItem