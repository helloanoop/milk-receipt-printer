import React from 'react';

const YearSelector = ({ selectedYear, onChange }) => {
  const currentYear = new Date().getFullYear();
  const years = [currentYear - 1, currentYear, currentYear + 1];

  return (
    <select
      value={selectedYear}
      onChange={(e) => onChange(e.target.value)}
      className="form-select border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearSelector;
