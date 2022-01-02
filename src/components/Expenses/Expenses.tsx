import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.scss';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem data={props.items[0]} />
      <ExpenseItem data={props.items[1]} />
      <ExpenseItem data={props.items[2]} />
      <ExpenseItem data={props.items[3]} />
    </Card>
  );
};

export default Expenses;
