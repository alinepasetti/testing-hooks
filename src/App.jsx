import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import P from 'prop-types';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('filho');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

const App = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = useCallback(
    (num) => setCounter((counter) => counter + num),
    [],
  );
  console.log('pai');
  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
};

Button.propTypes = {
  incrementButton: P.func,
};

export default App;
