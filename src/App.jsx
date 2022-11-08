import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setReverse((reverse) => !reverse);
  };

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={`App-logo ${reverse ? 'reverse' : ''}`}
          alt="logo"
        />
        <button onClick={handleClick}>Reverse {reverse}</button>
        <br />
        <button type="button" onClick={handleIncrement}>
          Increment {counter}
        </button>
      </header>
    </div>
  );
}

export default App;
