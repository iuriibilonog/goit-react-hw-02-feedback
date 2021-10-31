import './Statistics.css';

const Statistics = ({ options, total, positiveInPercente }) => {
  const { good, neutral, bad } = options;
  
  return (
    <div className="statisticsWrapper">
      <p className="feedCount">Good : {good}</p>
      <p className="feedCount">Neutral : {neutral}</p>
      <p className="feedCount">Bad : {bad}</p>
      <p className="feedCount">Total : {total()}</p>
      <p className="feedCount">Positive feedback : {positiveInPercente()}%</p>
    </div>
  )
  
}
 

export default Statistics;