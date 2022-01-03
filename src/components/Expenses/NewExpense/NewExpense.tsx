import React, { useState } from 'react';
import './NewExpense.scss';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showAddExpenseHandler = () => {
    setShowForm(true);
  };

  const cancelClickHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpenseData={cancelClickHandler}
        />
      ) : (
        <button type="button" onClick={showAddExpenseHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};
export default NewExpense;
