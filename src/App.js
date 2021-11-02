import React, { Component } from "react";
import s from "./App.module.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section/";
import Notification from "./components/Notification";

class App extends Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };

  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
  };

  getFeedBackOnClick = (name) => {
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const PositivePercente = total > 0 ? Math.round((good / total) * 100) : 0;
    return PositivePercente;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.App}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            getFeedBackOnClick={this.getFeedBackOnClick}
            options={["good", "neutral", "bad"]}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              options={{ good, neutral, bad }}
              total={this.countTotalFeedback}
              positiveInPercente={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
