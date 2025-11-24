'use client'
import { connect } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';

const Counter = ({ count, increment, decrement }) => (
  <div>
    <p>{count}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
