import React, { useState } from 'react';
import './App.css';

function App() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [daysBetween, setDaysBetween] = useState(null);

  const handleCalculate = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const timeDiff = Math.abs(end - start); // Time difference in milliseconds
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert ms to days

      setDaysBetween(daysDiff);
    } else {
      alert('Please provide both start and end dates.');
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h2>Days Between Two Dates</h2>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button onClick={handleCalculate}>Calculate</button>
        {daysBetween !== null && (
          <div className="result">
            <h3>{daysBetween} days</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
