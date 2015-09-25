import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  render() {
    const { increment, autoIncrement, autoDecrement, decrement, counter } = this.props;
    return (
      <p>
        Clicked: <span style={{color: counter % 2 == 0? 'blue' : 'red',fontWeight: 'bold'}}>{counter}</span> times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={() => autoIncrement()}>AutoIncrement</button>
        {' '}
        <button onClick={() => autoDecrement()}>AutoDecrement</button>
      </p>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  autoIncrement: PropTypes.func.isRequired,
  autoDecrement: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
