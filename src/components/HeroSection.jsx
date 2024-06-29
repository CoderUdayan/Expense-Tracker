import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Expense Tracker</h1>
        <p>Effortlessly track your expenses and stay on top of your finances.</p>
        <a href="#add-expense" className="hero-button">Get Started</a>
      </div>
      <div className="hero-image">
        <img src="\dist\img\track1.jpg" alt="Expense Tracker" />
      </div>
    </section>
  );
};

export default HeroSection;
