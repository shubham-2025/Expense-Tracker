import React, { useState, useEffect } from "react";
import BudgetDisplay from "./components/BudgetDisplay";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import CategoryPieChart from "./components/CategoryPieChart";
import CSVExport from "./components/CSVExport";
import HamburgerMenu from "./components/HamburgerMenu";
import "./styles/App.css";
import { BiBold } from "react-icons/bi";
import { fontString } from "chart.js/helpers";
import CollapsibleMenu from "./components/CollapsibleMenu";

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
        <div className="menu" style={menuStyle}>
          <h3 style={headingStyle}>Set Budget</h3>
          <div style={inputContainerStyle}>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              style={inputStyle}
            />
            <input
              type="number"
              placeholder="Enter Budget"
              value={budget}
              onChange={(e) => setBudget(parseInt(e.target.value, 10))}
              style={inputStyle}
            />
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            style={saveButtonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = saveButtonHoverStyle.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = saveButtonStyle.backgroundColor)}
          >
            Save
          </button>
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

const menuStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#f7f7f7",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  gap: "10px",
};

const headingStyle = {
  marginBottom: "10px",
  fontSize: "1.2rem",
  color: "black",
  fontWeight: "bold",
};

const inputContainerStyle = {
  display: "flex",
  gap: "8px", 
  justifyContent: "center",
};

const inputStyle = {
  width: "400px",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ddd",
  fontSize: "1rem",
  transition: "box-shadow 0.2s ease, border-color 0.2s ease",
};

const saveButtonStyle = {
  padding: "6px 12px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "green", // green
  color: "white",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.2s ease, transform 0.2s ease",
};

const saveButtonHoverStyle = {
  backgroundColor: "green", // 
};

export default App;
