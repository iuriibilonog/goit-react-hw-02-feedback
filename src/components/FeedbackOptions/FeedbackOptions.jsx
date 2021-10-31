import './FeedbackOptions.css';

const FeedbackOptions = ({getFeedBackOnClick}) => {
  return (
    <div className="btnWrapper">
      <button onClick={(e) => {getFeedBackOnClick(e.target.className)}} className="good">Good</button>
      <button onClick={(e) => {getFeedBackOnClick(e.target.className)}} className="neutral">Neutral</button>
      <button onClick={(e) => {getFeedBackOnClick(e.target.className)}} className="bad">Bad</button>
    </div>)
}
 
export default FeedbackOptions;