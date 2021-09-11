import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle("updated!");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.item.date} />
            <div className="expense-item__description">
                <h2>{props.item.title}</h2>
                <div className="expense-item__price">{props.item.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;