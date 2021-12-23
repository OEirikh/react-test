import React, { Component } from 'react';
import './Clock.scss';

// Таймер и утечка памяти с setState() без componentWillUnmount

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className="Clock__face">{this.state.time}</div>;
  }
}
