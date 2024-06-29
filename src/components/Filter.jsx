import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ expenses, setFilteredExpenses }) => {
  const [category, setCategory] = useState('');

  const handleFilter = () => {
    if (category) {
      setFilteredExpenses(expenses.filter(expense => expense.category === category));
    } else {
      setFilteredExpenses(expenses);
    }
  };

  return (
    <div className="filter">
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Filter by category" 
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
