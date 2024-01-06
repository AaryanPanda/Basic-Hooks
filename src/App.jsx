import React, { useState } from "react";
import "./App.css";
import UseContext from "./Components/useContext.jsx";
import UseEffect from "./Components/useEffect.jsx";

export const ToggleTheme = React.createContext();

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState((state) => !state);
  };

  return (
    <>
      <ToggleTheme.Provider value={state}>
        <button id="toggle" onClick={handleToggle}>Toggle</button>
        <UseContext />
      </ToggleTheme.Provider>
    </>
  );
}

export default App;
