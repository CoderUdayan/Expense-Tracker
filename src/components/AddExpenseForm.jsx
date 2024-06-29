import React, { useState } from 'react';
import './AddExpenseForm.css';

const AddExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !category) return;

    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleString(),
    };

    addExpense(newExpense);
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Add New Expense</h2>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="stationary">Stationary</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
        </select>
      </div>
      <button type="submit" disabled={!description || !amount || !category}>
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;

// ----------------------------------------

// import React, { useState, useEffect } from 'react';
// import './AddExpenseForm.css';

// const AddExpenseForm = ({ addExpense }) => {
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');

//   useEffect(() => {
//     const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
//     if (storedExpenses) {
//       addExpense(storedExpenses);
//     }
//   }, [addExpense]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!description || !amount || !category) return;

//     const newExpense = {
//       id: Date.now(),
//       description,
//       amount: parseFloat(amount),
//       category,
//       date: new Date().toLocaleString(),
//     };

//     addExpense(newExpense);
//     saveToLocalStorage(newExpense);
//     setDescription('');
//     setAmount('');
//     setCategory('');
//   };

//   const saveToLocalStorage = (expense) => {
//     const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
//     storedExpenses.push(expense);
//     localStorage.setItem('expenses', JSON.stringify(storedExpenses));
//   };

//   return (
//     <form className="expense-form" onSubmit={handleSubmit}>
//       <h2>Add New Expense</h2>
//       <div className="form-group">
//         <label htmlFor="description">Description</label>
//         <input
//           type="text"
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="amount">Amount</label>
//         <input
//           type="number"
//           id="amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="category">Category</label>
//         <select
//           id="category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="">Select a category</option>
//           <option value="stationary">Stationary</option>
//           <option value="food">Food</option>
//           <option value="transport">Transport</option>
//         </select>
//       </div>
//       <button type="submit" disabled={!description || !amount || !category}>
//         Add Expense
//       </button>
//     </form>
//   );
// };

// export default AddExpenseForm;
