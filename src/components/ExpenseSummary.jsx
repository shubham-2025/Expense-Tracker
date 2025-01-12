import React from "react";

const ExpenseSummary = ({ expenses, budget, date }) => {
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingBudget = budget - totalExpense;
  const isBudgetExceeded = totalExpense > budget;

  return (
    <div className="expense-summary">
      <h2>Expense Summary</h2>

      {/* Display Selected Date */}
      <div>
        <strong>Date Selected: </strong>
        {date ? date : "No date selected"}
      </div>
      {/* Budget Overview Table */}
      <table className="budget-table">
        <thead>
          <tr>
            <th>Budget Overview</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Initial Budget</td>
            <td>₹{budget}</td>
          </tr>
          <tr>
            <td>Total Spent</td>
            <td>₹{totalExpense.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Remaining Budget</td>
            <td>₹{remainingBudget.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      {/* Warning if budget is exceeded */}
      {isBudgetExceeded && (
        <div className="warning">
          <p style={{ color: "red" }}>
            Warning: You have exceeded your budget by ₹{(totalExpense - budget).toFixed(2)}!
          </p>
        </div>
      )}
    </div>
  );
};

export default ExpenseSummary;
