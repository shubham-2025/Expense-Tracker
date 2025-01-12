import React, { useState } from "react";

const HamburgerMenu = ({ budget, setBudget, date, setDate }) => {
  const [newBudget, setNewBudget] = useState(budget);
  const [newDate, setNewDate] = useState(date);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Manage the menu visibility

  const handleSave = () => {
    setBudget(newBudget); // Update the budget in the parent component
    setDate(newDate); // Update the date in the parent component
    setIsMenuOpen(false); // Close the menu after saving
  };

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <div className="hamburger-menu">
      {/* Hamburger Icon - inside the navbar */}
      <button className="hamburger-icon" onClick={handleHamburgerClick}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      {/* Menu content - toggle visibility based on state */}
      {isMenuOpen && (
        <div className="menu-content">
          <div>
            <label>Budget: </label>
            <input
              type="number"
              value={newBudget}
              onChange={(e) => setNewBudget(e.target.value)}
            />
          </div>

          <div>
            <label>Date: </label>
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
          </div>

          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
