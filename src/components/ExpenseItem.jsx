import React, { useState } from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({ expense, deleteExpense, editExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);

  const handleEdit = () => {
    editExpense({ ...expense, description, amount });
    setIsEditing(false);
  };

  return (
    <div className="expense-item">
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(parseFloat(e.target.value))} 
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{expense.description}</span>
          <span>${expense.amount.toFixed(2)}</span>
          <span>{expense.category}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ExpenseItem;
