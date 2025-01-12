# Expense Tracker Application

## Description
The Expense Tracker is a React-based web application designed to help users manage their daily expenses effectively. With this app, users can:

- Add, edit, and delete expenses.
- Set a daily budget and get warnings if expenses exceed the budget.
- Categorize expenses and view a category-wise breakdown via a pie chart.
- Export expense data as a CSV file for offline use.

## Features

### Core Features
- **Expense Management**: Add, edit, and delete expense records with ease.
- **Budget Warning**: Get a warning popup when expenses exceed the set daily budget, along with the ability to adjust the budget dynamically.
- **Category Breakdown**: View expenses categorized via an interactive pie chart.
- **CSV Export**: Download expense data as a CSV file for offline analysis.

### Animations and UI Enhancements
- Smooth hover effects and animations for an enhanced user experience.
- Scrollable lists for better usability when dealing with a large number of records.

## Folder Structure
The application follows a modular folder structure for better maintainability:

```
src
├── components
│   ├── BudgetDisplay.jsx
│   ├── CategoryIcon.jsx
│   ├── CategoryPieChart.jsx
│   ├── CSVExport.jsx
│   ├── ExpenseForm.jsx
│   ├── ExpenseList.jsx
│   ├── ExpenseSummary.jsx
│   ├── HamburgerMenu.jsx
├── styles
│   ├── index.css
├── App.jsx
├── index.html
├── main.jsx
├── vite.config.js
```

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/shubham-2025/expense-tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd expense-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:5173`.

## Usage
1. **Add Expenses**: Use the form to add an expense by entering a title, amount, and selecting a category.
2. **Set Budget**: Enter a daily budget to keep track of your spending.
3. **View Summary**: Check the Expense Summary section to see today’s budget and total expenses.
4. **Export Data**: Click on the "Export CSV" button to download a CSV file of your expense records.

## Contact Information
- **LinkedIn**: [Shubham Mahapure](https://www.linkedin.com/in/shubham-mahapure-737382205)
- **GitHub**: [shubham-2025](https://github.com/shubham-2025)

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
