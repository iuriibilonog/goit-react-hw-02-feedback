
import './FeedbackOptions.css';

const FeedbackOptions = ({ options , getFeedBackOnClick }) => {
  return (
    <div className="btnWrapper">
      {options.map(btn => <button type='button' key={btn} onClick={(e) => { getFeedBackOnClick(e.target.name) }} name={btn} className={btn}>{btn}</button>) }
      
    </div>)
}
 
export default FeedbackOptions;