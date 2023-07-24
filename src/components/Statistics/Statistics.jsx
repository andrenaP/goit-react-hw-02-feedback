import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ title, good, neutral, bad }) => {
  return (
    <div className="Statistics">
      <h2 className="title">{title}</h2>
      <ul className="Statistics_options">
        <li>
          Good: <span>{good}</span>
        </li>
        <li>
          neutral: <span>{neutral}</span>
        </li>
        <li>
          bad: <span>{bad}</span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
};
