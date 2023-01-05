import { useSelector, useDispatch } from 'react-redux';
import ButtonHome from '../../components/ButtonHome';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from '../../store/slices/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter Redux</h2>
      <div className="my-1">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div className="my-1">
        <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div>
      <div>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div className="mx-1">
        <span>{count}</span>
      </div>

      <ButtonHome />
    </div>
  );
};

export default Counter;
