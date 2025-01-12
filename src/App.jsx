import React, { useState, useEffect } from "react";
import BudgetDisplay from "./components/BudgetDisplay";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import CategoryPieChart from "./components/CategoryPieChart";
import CSVExport from "./components/CSVExport";
import HamburgerMenu from "./components/HamburgerMenu";
import "./styles/App.css";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  });

  const [budget, setBudget] = useState(5000); // Track initial budget
  const [darkMode, setDarkMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState(""); // Track selected date
  const [menuOpen, setMenuOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    if (budget > 0 && total > budget) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  }, [expenses, budget]);

  const addExpense = (expense) => setExpenses([...expenses, expense]);

  const deleteExpense = (index) =>
    setExpenses(expenses.filter((_, i) => i !== index));

  const handleDateChange = (event) => setSelectedDate(event.target.value);

  // New budget change handler
  const handleBudgetChange = (amount) => {
    setBudget((prevBudget) => prevBudget + amount);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* Navbar */}
      <nav className="navbar">
        <h1>💸 Expense Tracker</h1>
        <div className="nav-actions">
          <CSVExport expenses={expenses} />
          <button className="menu-button" onClick={() => setMenuOpen((prev) => !prev)}>☰</button>
        </div>
      </nav>

      {/* Collapsible Menu */}
      {menuOpen && (
        <div className="menu">
          <h3>Set Budget</h3>
          <input type="date" value={selectedDate} onChange={handleDateChange} />
          <input
            type="number"
            placeholder="Enter Budget"
            value={budget}
            onChange={(e) => setBudget(parseInt(e.target.value, 10))}
          />
          <button onClick={() => setMenuOpen(false)}>Save</button>
        </div>
      )}

      {/* Budget Warning */}
      {showWarning && (
        <div className="warning-popup">
          <div className="warning-content">
            <span className="danger-symbol">⚠️</span>
            <p>You are running out of budget! Increase the budget.</p>

            {/* Display current value next to the buttons in Rupees */}
            <p>Increase Budget: ₹{budget}</p>

            {/* Buttons for adding specific amounts */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button onClick={() => handleBudgetChange(100)}>+ ₹100</button>
              <button onClick={() => handleBudgetChange(200)}>+ ₹200</button>
              <button onClick={() => handleBudgetChange(500)}>+ ₹500</button>
              <button onClick={() => handleBudgetChange(1000)}>+ ₹1000</button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="app-grid">
        <ExpenseForm addExpense={addExpense} />
        <ExpenseSummary expenses={expenses} budget={budget} date={selectedDate} />
        <CategoryPieChart expenses={expenses} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Expense Tracker. All rights reserved.</p>
      </footer>

      {/* Hamburger Menu */}
      <HamburgerMenu
        budget={budget}
        setBudget={setBudget}
        date={selectedDate}
        setDate={handleDateChange}
      />
    </div>
  );
};

export default App;
