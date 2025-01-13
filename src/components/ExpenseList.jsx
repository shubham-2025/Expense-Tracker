import React from "react";
import CategoryIcon from "./CategoryIcon";
import { FiTrash } from "react-icons/fi"; // Importing the trash icon

const ExpenseList = ({ expenses, deleteExpense }) => {
  const containerStyle = {
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(238, 16, 16, 0.94)",
    width: "90%",
  };

  const titleStyle = {
    marginBottom: "10px",
  };

  const listContainerStyle = {
    maxHeight: "385px",
    overflowY: "auto",
    padding: "0",
    margin: "0",
    listStyleType: "none",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    margin: "5px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  };

  const listItemHoverStyle = {
    backgroundColor: "#f1f1f1",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const deleteButtonStyle = {
    backgroundColor: "#ff4d4f",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const deleteButtonHoverStyle = {
    backgroundColor: "#ff7875",
  };

  return (
    <div style={containerStyle} className="expense-list">
      <h2 style={titleStyle}>Expense List</h2>
      <hr />
      <ul style={listContainerStyle}>
        {expenses.length > 0 ? (
          expenses.map((expense, index) => (
            <li
              key={index}
              style={listItemStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  listItemHoverStyle.backgroundColor;
                e.currentTarget.style.transform = listItemHoverStyle.transform;
                e.currentTarget.style.boxShadow = listItemHoverStyle.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  listItemStyle.backgroundColor;
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <CategoryIcon category={expense.category} />
                <span style={{ marginLeft: "10px" }}>
                  {expense.title} - ₹{expense.amount.toFixed(2)} (
                  {expense.category})
                </span>
              </div>

              <button
                style={deleteButtonStyle}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor =
                    deleteButtonHoverStyle.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor =
                    deleteButtonStyle.backgroundColor)
                }
                onClick={() => deleteExpense(index)}
              >
                <FiTrash size={16} /> {/* Add the trash icon */}
              </button>
            </li>
          ))
        ) : (
          <p>No expenses added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default ExpenseList;
