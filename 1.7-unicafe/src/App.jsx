import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h1>Give Feedback</h1>

      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h2>Statistics</h2>
      <p>good : {good}</p>
      <p>neutral : {neutral}</p>
      <p>bad: {bad}</p>
      <p>all : {total}</p>
      <p>average :{average}</p>
      <p>positive : {positive.toFixed(1)} %</p>
    </div>
  );
};
export default App;
