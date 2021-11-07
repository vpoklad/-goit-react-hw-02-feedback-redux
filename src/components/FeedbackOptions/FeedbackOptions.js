import s from './FeedbackOptions.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/actions'

import PropTypes from 'prop-types';
function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.options}>
      {options.map(option => (
        <button
          className={s.button}
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  options: Object.keys(state)
})

const mapDispatchToProps = (dispatch) => {
  

    return {
      onLeaveFeedback: (e) => dispatch(actions(`feedback/${ e.target.name }`))
      
    }
    
    

  

}
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackOptions);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

