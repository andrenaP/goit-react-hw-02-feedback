import React, { Component } from 'react';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    return <div></div>;
  }
}

export default App;
