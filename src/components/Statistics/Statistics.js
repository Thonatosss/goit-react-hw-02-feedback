import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
    <div className="Stats">
        <span>Good: {good} </span>
        <span>Neutral: {neutral} </span>
        <span>Bad: {bad}</span>
        <span>Total: {total()}</span>
        <span>Percentage: {percentage()}</span>
    </div>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    percentage: PropTypes.func.isRequired
};

export default Statistics;
