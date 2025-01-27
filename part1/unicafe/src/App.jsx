import React, { useState } from 'react';

const App = () => {
  // State variables for feedback
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Calculate statistics
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Give Feedback</h1>

      <div>
        <button
          onClick={() => setGood(good + 1)}
          style={{ padding: '10px 20px', margin: '5px', fontSize: '1rem', cursor: 'pointer' }}
        >
          Good
        </button>
        <button
          onClick={() => setNeutral(neutral + 1)}
          style={{ padding: '10px 20px', margin: '5px', fontSize: '1rem', cursor: 'pointer' }}
        >
          Neutral
        </button>
        <button
          onClick={() => setBad(bad + 1)}
          style={{ padding: '10px 20px', margin: '5px', fontSize: '1rem', cursor: 'pointer' }}
        >
          Bad
        </button>
      </div>

      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Average: {average.toFixed(2)}</p>
          <p>Positive: {positivePercentage.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default App