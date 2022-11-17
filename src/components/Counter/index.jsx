import { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterProvider/context';

export const Counter = () => {
  const {
    counterState: { counter },
  } = useContext(CounterContext);
  return <p>Counter {counter}</p>;
};
