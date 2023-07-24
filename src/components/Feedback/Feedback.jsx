import PropTypes from 'prop-types';
import './Feedback.css';

const Feedback = ({ title, options, onLeaveFeedback }) => {
  return (
    <div className="btn">
      <h2 className="title">{title}</h2>
      {options.map(option => {
        return (
          <button
            className="feedbackBtn"
            type="button"
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Feedback;

Feedback.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
