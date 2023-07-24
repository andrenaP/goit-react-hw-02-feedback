import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({
  title,
  good,
  neutral,
  bad,
  TotalFeedback,
  PositiveFeedbackPercentage,
}) => {
  return (
    <div className="Statistics">
      <h2 className="title">{title}</h2>
      <ul className="Statistics_options">
        <li>
          Good: <span>{good}</span>
        </li>
        <li>
          Neutral: <span>{neutral}</span>
        </li>
        <li>
          Bad: <span>{bad}</span>
        </li>
        <li>
          Total: <span>{TotalFeedback}</span>
        </li>
        <li>
          Positive feedback: <span>{PositiveFeedbackPercentage}</span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
};
