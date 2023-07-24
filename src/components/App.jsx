import React, { Component } from 'react';
import Feedback from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;
    const PositiveFeedbackPercentage = Math.round((good * 100) / totalFeedback);
    if (totalFeedback === 0) {
      return 0;
    }
    return PositiveFeedbackPercentage;
  };
  leaveFeedback = feedbackType => {
    this.setState(prevState => {
      return {
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Feedback
          title="Please leave feedback"
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.leaveFeedback}
        />
        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          TotalFeedback={this.countTotalFeedback()}
          PositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;
