import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { incremento, decremento } from '../store/slices';

export default function Counter() {
  const count = useSelector((state: RootState) => state.count.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incremento())}>Increment</button>
      <button onClick={() => dispatch(decremento())}>Decrement</button>
    </div>
  );
}
