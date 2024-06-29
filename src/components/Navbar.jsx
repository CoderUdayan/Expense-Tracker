// import React, { useState } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <h1 className="navbar-logo">Expense Tracker</h1>
//         <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
//           <a href="#home">Home</a>
//           <a href="./components/ExpenseList">Expenses List</a>
//           <a href="./components/AddExpenseForm">Add Expense</a>
//         </div>
//         <div className="navbar-hamburger" onClick={toggleMobileMenu}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// ---------------------------------------------------------------
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Expense Tracker</h1>
        <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#expense-list">Expenses List</a>
          <a href="#add-expense">Add Expense</a>
        </div>
        <div className={`navbar-hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
