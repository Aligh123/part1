const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;

  const positive = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <p>good : {good}</p>
      <p>neutral : {neutral}</p>
      <p>bad :{bad}</p>
      <p>total : {total}</p>
      <p>average : {average.toFixed(1)}</p>
      <p>positive : {positive.toFixed(1)}</p>
    </div>
  );
};
export default Statistics;
