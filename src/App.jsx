import './App.css';
import React, { createContext, useContext, useReducer, useRef } from 'react';
import P, { node } from 'prop-types';

const globalVariables = {
  title: 'banana',
  body: 'banana, banana',
  counter: 0,
};

const Context = createContext();

// provider could send the dispatch
// const AppContext = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, globalVariables);
//   return (
//     <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
//   );
// };

// however, it's better to centralize the type responsibility to
// the AppContext and send the function ready to be used
const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalVariables);

  const changeTitle = (payload) => {
    dispatch({ type: TYPES.CHANGE_TITLE, payload });
  };
  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

const TYPES = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

const reducer = (state, actions) => {
  switch (actions.type) {
    case TYPES.CHANGE_TITLE:
      return { ...state, title: actions.payload };
  }
  return { ...state };
};

AppContext.propTypes = {
  children: P.node,
};

const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef(null);
  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>
        {context.state.title}
      </h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

const App = () => {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
};

export default App;
