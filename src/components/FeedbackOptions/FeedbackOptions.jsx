import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';


const FeedbackOptions = ({ options , getFeedBackOnClick }) => {
  return (
    <div className={s.btnWrapper}>
      {options.map(btn => <button type='button' key={btn} onClick={(e) => { getFeedBackOnClick(e.target.name) }} name={btn} className={s.btn}>{btn}</button>) }
      
    </div>)
}

FeedbackOptions.protoTypes = {
  options: PropTypes.array.isRequired,
  getFeedBackOnClick: PropTypes.func.isRequired

}
 
export default FeedbackOptions;