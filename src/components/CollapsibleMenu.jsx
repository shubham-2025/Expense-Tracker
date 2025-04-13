import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CollapsibleMenu = ({ selectedDate, setSelectedDate, budget, setBudget, closeMenu }) => {
  const menuStyle = {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "300px",
    margin: "0 auto",
  };

  const headingStyle = { marginBottom: "10px" };
  const inputContainerStyle = { display: "flex", flexDirection: "column", gap: "10px" };
  const inputStyle = {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const saveButtonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const saveButtonHoverStyle = { backgroundColor: "#0056b3" };

  return (
    <div style={menuStyle}>
      <h3 style={headingStyle}>Set Budget</h3>
      <div style={inputContainerStyle}>
        {/* Inline Date Picker */}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MMMM d, yyyy"
          inline
        />
        {/* Budget Input */}
        <input
          type="number"
          placeholder="Enter Budget"
          value={budget}
          onChange={(e) => setBudget(parseInt(e.target.value, 10))}
          style={inputStyle}
        />
      </div>
      <button
        onClick={closeMenu}
        style={saveButtonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = saveButtonHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = saveButtonStyle.backgroundColor)}
      >
        Save
      </button>
    </div>
  );
};

export default CollapsibleMenu;
