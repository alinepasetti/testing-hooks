import './App.css';
import React, { useReducer } from 'react';

const globalVariables = {
  title: 'banana',
  body: 'banana, banana',
  counter: 0,
};
const TYPES = {
  increment_counter: 'increment_counter',
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.increment_counter:
      return { ...state, counter: state.counter + 1 };
  }
  return { ...state };
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, globalVariables);
  const { title, counter } = state;
  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: TYPES.increment_counter })}>
        mais um
      </button>
    </div>
  );
};

export default App;
