import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { incremento, decremento } from '../store/slices';
import { fetchToken } from '../store/login';

export default function Counter() {
  const { count, login } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h1>Contador: {count.value}</h1>
      <button onClick={() => dispatch(incremento())}>Incremento</button>
      <button onClick={() => dispatch(decremento())}>Decremento</button>
      <button onClick={() => dispatch(fetchToken())}>Logar</button>
      {login.data ? (
        <h1>Meu login: {login.data}</h1>
      ) : (
        <h1>Meu login: {login.error}</h1>
      )}
    </div>
  );
}
