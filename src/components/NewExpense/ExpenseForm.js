import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userTitle, setUserTitle] = useState('');
    const [userAmount, setUserAmount] = useState('');
    const [userDate, setUserDate] = useState('');

    const titleChangeHandler = (e) => {
        setUserTitle(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setUserAmount(e.target.value);
    } 
    const dateChangeHandler = (e) => {
        setUserDate(e.target.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const expense = {
            title: userTitle,
            amount: +userAmount,
            date: new Date(userDate)
        }
        props.onSaveExpenseData(expense);
        setUserTitle('');//b clear l input
        setUserAmount('');
        setUserDate('');
    }
    // const [userData, setUserData] = useState({
    //     userTitle: '',
    //     userAmount: '',
    //     userDate: ''
    // });
    // const titleHandler = (e) = {
    //     setUserData((prevState) => {
    //         return {...prevState, userTitle: e.target.value}
    //     });
    // } 
return (
    <form onSubmit={onSubmitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={titleChangeHandler} value={userTitle} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} 
            value={userAmount}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}
            value={userDate}/>
        </div>
    </div>
    <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
    </div>
    </form>
);
};

export default ExpenseForm