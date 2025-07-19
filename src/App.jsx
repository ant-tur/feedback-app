import { useState } from 'react';

import Button from './components/Button';
import Statistics from './components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>How was your experience? 💬</h2>
      <div>
        <Button onClick={handleClickGood} emoji="👍" text="good" />
        <Button onClick={handleClickNeutral} emoji="😐" text="neutral" />
        <Button onClick={handleClickBad} emoji="👎" text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
