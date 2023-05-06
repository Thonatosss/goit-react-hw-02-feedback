import React, { Component } from 'react';
import Controls from "./Controls";
import Stats from "./Stats";


class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    handleGoodFeedback = () => {
        this.setState(prevFeedback => ({
            good: prevFeedback.good + 1,
        }));
    }
    handleNeturalFeedback = () => {
        this.setState(prevFeedback => ({
            neutral: prevFeedback.neutral + 1,
        }));
    }
    handleBadFeedback = () => {
        this.setState(prevFeedback => ({
            bad: prevFeedback.bad + 1,
        }));
    }
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;

        return good + neutral + bad;
    }
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return Math.round((good / total) * 100);
    }


    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <Controls
                    onGoodFeedback={this.handleGoodFeedback}
                    onNeturalFeedback={this.handleNeturalFeedback}
                    onBadFeedback={this.handleBadFeedback}
                />
                <Stats
                    good={good} netural={neutral} bad={bad} total={this.countTotalFeedback} percentage={this.countPositiveFeedbackPercentage}
                />
            </div>



        );
    }
}


export default Statistics;