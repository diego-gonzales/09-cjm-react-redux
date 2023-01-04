import { useSelector, useDispatch } from 'react-redux';
import ButtonHome from '../components/ButtonHome';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from '../store/slices/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter Redux</h2>
      <div className="my-1">
        <button onClick={() => dispatch(decrement())}>-</button>
        <span className="mx-1">{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div className="my-1">
        <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
        <span className="mx-1">{count}</span>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div>

      <ButtonHome />
    </div>
  );
};

export default Counter;
