import PropTypes from 'prop-types';
import Section from '../Section/Section';
import Notification from '../Notification/Notifiaction';
import { connect } from 'react-redux';

function Statistics({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) {
  return (<>
    {total === 0 ? (
      <Notification message="No feedback given" />
    ) : (
    
      <Section title="Statistics">
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </Section>
    )}
    </>
  );
}
const mapStateToProps = ({ good, bad, neutral }) => {
  
  const total = () => { return good + bad + neutral };
  const posFeedback = () =>  Math.round( good * 100 / total());
  
  return {
    good,
    neutral,
    bad,
    total: total(),
    positivePercentage: posFeedback()
    

  }
}
export default connect(mapStateToProps)(Statistics);


Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
