

import React, { useReducer } from 'react';

// Initial state
const initialState = {
  count: 0,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Component that uses useReducer
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

// Your main app component
function App() {
  return (
    <div>
      <h1>Counter App using useReducer</h1>
      <Counter />
    </div>
  );
}
export default App;