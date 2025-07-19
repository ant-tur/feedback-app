import StatisticLine from './StatisticLine';
import { roundToTwo } from '../utils/roundToTwo';

const Statistics = ({ good, neutral, bad }) => {
  const all = good + bad + neutral;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <>
      {all === 0 ? (
        <p>🤔 Waiting for your feedback...</p>
      ) : (
        <>
          <h2>statistics</h2>
          <table>
            <tbody>
              <StatisticLine text="good" value={good} />
              <StatisticLine text="neutral" value={neutral} />
              <StatisticLine text="bad" value={bad} />
              <StatisticLine text="all" value={all} />
              <StatisticLine text="average" value={roundToTwo(average)} />
              <StatisticLine text="positive" value={roundToTwo(positive)} />
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Statistics;
