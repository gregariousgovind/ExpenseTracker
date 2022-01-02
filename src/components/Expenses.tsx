import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.scss';

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem data={props.items[0]} />
      <ExpenseItem data={props.items[1]} />
      <ExpenseItem data={props.items[2]} />
      <ExpenseItem data={props.items[3]} />
    </div>
  );
}

export default Expenses;
