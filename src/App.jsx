import './App.css';
import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  createContext,
  useContext,
} from 'react';

const globalVariables = {
  title: 'banana',
  body: 'banana, banana',
  counter: 0,
};

const GlobalContext = createContext();

const Div = () => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

const H1 = () => {
  const {
    contextState: { title, counter },
  } = useContext(GlobalContext);
  console.log('filho h1');
  return <h1>{title + counter}</h1>;
};
const P = () => {
  const {
    contextState: { body },
    setContextState,
  } = useContext(GlobalContext);
  console.log('filho p');
  return (
    <p
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
    >
      {body}
    </p>
  );
};

const App = () => {
  const [contextState, setContextState] = useState(globalVariables);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
};

// Post.propTypes = {
//   post: P.shape({
//     title: P.string,
//   }),
//   getTitle: P.func,
// };

export default App;
