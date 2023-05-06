const Stats = ({good, netural, bad, total, percentage}) => (
    <div className="Stats">
        <h2 className="Stats-title">Statisctics</h2>
        <span>Good: {good} </span>
        <span>Neutral: {netural} </span>
        <span>Bad: {bad}</span>
        <span>Total: {total()}</span>
        <span>Percentage: {percentage()}</span>
    </div>
    
);

export default Stats;