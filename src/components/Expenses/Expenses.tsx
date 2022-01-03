import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.scss';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let expensesContent = <p> No expenses found </p>;

  const filteredExpenses = props.items.filter((item) => {
    const date = new Date(item.date);
    return date.getFullYear().toString() == filteredYear;
  });

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem key={item.id} data={item} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
