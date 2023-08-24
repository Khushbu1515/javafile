

import React, { createContext, useContext } from 'react';

// Create a context
const ThemeContext = createContext();

// Create a component that provides the context value
function ThemeProvider({ children }) {
  const theme = 'light'; // You can replace this with dynamic logic
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

// Create a component that consumes the context value using useContext
function ThemeDisplay() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}

// Your main app component
function App() {
  return (
    <ThemeProvider>
      <ThemeDisplay />
    </ThemeProvider>
  );
}

export default App;