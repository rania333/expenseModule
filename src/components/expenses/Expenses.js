import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    let ExpenseContent =  <p className="expenses-list__fallback">No Expenses Found</p> ;
    if(filteredExpenses.length > 0) {
        ExpenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                item={expense}
            />
    ))
    }
return (
<Card className="expenses">
    <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
    {ExpenseContent}
</Card>
);
}

export default Expenses;