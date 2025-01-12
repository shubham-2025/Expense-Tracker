import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Other");
  const [customCategory, setCustomCategory] = useState("");

  const formContainerStyle = {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    marginBottom: "15px",
    boxShadow: "0 2px 4px rgba(238, 16, 16, 0.94)",
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginBottom: "11px",
    width: "90%",
  };

  const buttonStyle = {
    backgroundColor: "rgb(201, 41, 52),rgb(24, 53, 214)", // Purple color for the button
    color: "white",
    padding: "20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
    
  };

  const buttonHoverStyle = {
    backgroundColor: "rgb(95, 41, 165)", // Darker purple on hover
  };

  const headingStyle = {
    color: "black", // Same color as button for heading
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      title: title || (category === "Other" ? customCategory : category),
      amount: parseFloat(amount),
      category: category === "Other" ? customCategory : category,
    };
    addExpense(expense);
    setTitle("");
    setAmount("");
    setCategory("Other");
    setCustomCategory("");
  };

  return (
    <div style={formContainerStyle} className="expense-form">
      <h2 style={headingStyle}>Add Expense</h2> {/* Styled the h2 here */}
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          style={inputStyle}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={inputStyle}
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
          <option value="Misc">Misc.</option>
          <option value="Other">Other</option>
        </select>
        {category === "Other" && (
          <input
            type="text"
            placeholder="Custom Category"
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value)}
            required
            style={inputStyle}
          />
        )}
        <button className="add-expense-btn"
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
