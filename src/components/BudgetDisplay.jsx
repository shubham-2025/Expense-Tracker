import React from "react";

const BudgetDisplay = ({ budget, totalExpense }) => {
  return (
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
      </tbody>
    </table>
  );
};

export default BudgetDisplay;
