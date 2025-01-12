import React from 'react';

const CSVExport = ({ expenses }) => {
  const downloadCSV = () => {
    const csvContent = [
      ['Name', 'Amount', 'Category'],
      ...expenses.map(item => [item.name, item.amount, item.category])
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'expenses.csv';
    link.click();
  };

  return <button onClick={downloadCSV}>📥 Export CSV</button>;
};

export default CSVExport;
