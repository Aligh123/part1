import { useState } from "react";

const StatisticLine = ({ text, value }) => (
  <p>
    {text} : {value}
  </p>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average.toFixed(1)} />
      <StatisticLine text="positive" value={positive.toFixed(1)} />
    </div>
  );
};
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />

      
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />


      <Button handleClick={()=>setBad(bad + 1)} text="bad" />

      <h2>Statistics </h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};
export default App;
