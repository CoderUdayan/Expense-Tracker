// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import ExpenseForm from './components/ExpenseForm';

// import ExpenseList from './components/ExpenseList';
// import Filter from './components/Filter';
// import './App.css';

// function App() {
//   const [expenses, setExpenses] = useState([]);
//   const [filteredExpenses, setFilteredExpenses] = useState([]);

//   const addExpense = (expense) => {
//     const updatedExpenses = [...expenses, expense];
//     setExpenses(updatedExpenses);
//     setFilteredExpenses(updatedExpenses);
//   };

//   const deleteExpense = (id) => {
//     const updatedExpenses = expenses.filter(expense => expense.id !== id);
//     setExpenses(updatedExpenses);
//     setFilteredExpenses(updatedExpenses);
//   };

//   const editExpense = (updatedExpense) => {
//     const updatedExpenses = expenses.map(expense => 
//       expense.id === updatedExpense.id ? updatedExpense : expense
//     );
//     setExpenses(updatedExpenses);
//     setFilteredExpenses(updatedExpenses);
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       <HeroSection />
//       <ExpenseForm addExpense={addExpense} />
//       <Filter expenses={expenses} setFilteredExpenses={setFilteredExpenses} />
//       <ExpenseList 
//         expenses={filteredExpenses} 
//         deleteExpense={deleteExpense} 
//         editExpense={editExpense} 
//       />
//     </div>
//   );
// }

// export default App;

// ---------------------------------------------------------------

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  const addExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    setFilteredExpenses(updatedExpenses);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
    setFilteredExpenses(updatedExpenses);
  };

  const editExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map(expense => 
      expense.id === updatedExpense.id ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
    setFilteredExpenses(updatedExpenses);
  };

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AddExpenseForm addExpense={addExpense} />
      <Filter expenses={expenses} setFilteredExpenses={setFilteredExpenses} />
      <ExpenseList 
        expenses={filteredExpenses} 
        deleteExpense={deleteExpense} 
        editExpense={editExpense} 
      />
    </div>
  );
}

export default App;

// ----------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import AddExpenseForm from './components/AddExpenseForm';
// import ExpenseList from './components/ExpenseList';
// import Filter from './components/Filter';
// import './App.css';

// function App() {
//   const [expenses, setExpenses] = useState([]);
//   const [filteredExpenses, setFilteredExpenses] = useState([]);

//   useEffect(() => {
//     const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
//     setExpenses(storedExpenses);
//     setFilteredExpenses(storedExpenses);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('expenses', JSON.stringify(expenses));
//   }, [expenses]);

//   const addExpense = (expense) => {
//     const updatedExpenses = [...expenses, expense];
//     setExpenses(updatedExpenses);
//     setFilteredExpenses(updatedExpenses);
//   };

//   const deleteExpense = (id) => {
//     const updatedExpenses = expenses.filter(expense => expense.id !== id);
//     setExpenses(updatedExpenses);
//     setFilteredExpenses(updatedExpenses);
//   };

//   const editExpense = (updatedExpense) => {
//     const updatedExpenses = expenses.map(expense => 
//       expense.id === updatedExpense.id ? updatedExpense : expense
//     );
//     setExpenses(updatedExpenses);
//     setFilteredExpenses(updatedExpenses);
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       <HeroSection />
//       <AddExpenseForm addExpense={addExpense} />
//       <Filter expenses={expenses} setFilteredExpenses={setFilteredExpenses} />
//       <ExpenseList 
//         expenses={filteredExpenses} 
//         deleteExpense={deleteExpense} 
//         editExpense={editExpense} 
//       />
//     </div>
//   );
// }

// export default App;
