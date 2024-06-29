import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ id: Date.now(), description, amount: parseFloat(amount), category });
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
        required 
      />
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount" 
        required 
      />
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Category" 
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
