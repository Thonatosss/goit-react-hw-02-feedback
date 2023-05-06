const Controls = ({ onGoodFeedback, onNeturalFeedback, onBadFeedback}) => (
    <div className="Feedback" >
        <div className="FeedbackControls">
            <button type="button" onClick={onGoodFeedback} >Good</button>
            <button type="button" onClick={onNeturalFeedback}>Neutral</button>
            <button type="button" onClick={onBadFeedback}>Bad</button>
        </div>               
    </div>
   
);

export default Controls;