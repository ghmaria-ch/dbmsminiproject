import { useState } from 'react';

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Give Feedback</h1>

      <div>
        <button
          onClick={() => setGood(good + 1)}
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Good
        </button>
        <button
          onClick={() => setNeutral(neutral + 1)}
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => setBad(bad + 1)}
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Bad
        </button>
      </div>

      <h2>Statistics</h2>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    </div>
  );
};

export default App;