// components/MonthSelector.js
import React from 'react';

const MonthSelector = ({ selectedMonth, onChange }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <select
      value={selectedMonth}
      onChange={(e) => onChange(e.target.value)}
      className="form-select border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
    >
      <option value="">Select Month</option>
      {months.map((month, index) => (
        <option key={index} value={month}>
          {month}
        </option>
      ))}
    </select>
  );
};

export default MonthSelector;
