import React from 'react';
import ExpenseItem from './ExpenseItem';

import './ExpensesList.scss';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No expenses found </h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem key={item.id} data={item} />
      ))}
    </ul>
  );
};
export default ExpensesList;
