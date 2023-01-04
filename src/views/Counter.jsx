import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount } from '../store/slices/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter Redux</h2>
      <button
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
