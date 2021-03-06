import React, { Component } from 'react';
import Description from './../../Components/Description/Description';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    const count = this.state.count + 1;

    this.setState({
      count,
    });
  }

  subtract() {
    const count = this.state.count - 1;

    this.setState({
      count,
    });
  }

  render() {
    return (
      <div className="rp-counter">
        <Description header="Counter" />

        <button className="rp-counter__button" onClick={this.add}>+</button>
        <span className="rp-counter__counter">{this.state.count}</span>
        <button className="rp-counter__button" onClick={this.subtract}>-</button>
      </div>
    );
  }
}

export default Counter;
