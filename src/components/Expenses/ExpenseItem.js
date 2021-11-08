import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Ciao');
    }
    return (
        <Card id={props.id} className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
                <button onClick={clickHandler}>Testo</button>
            </div>
        </Card>
    )
}

export default ExpenseItem