import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({ expenses, deleteExpense, editExpense }) => {
  const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="expense-list">
      {expenses.map(expense => (
        <ExpenseItem 
          key={expense.id} 
          expense={expense} 
          deleteExpense={deleteExpense} 
          editExpense={editExpense} 
        />
      ))}
      <div className="total">
        Total: ${totalAmount.toFixed(2)}
      </div>
    </div>
  );
};

export default ExpenseList;
