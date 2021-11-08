import React, {useState, createContext} from 'react';
import CounterWrapper from "./CounterWrapper";

export const CounterContext = createContext(null);

function App() {

    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter( counter => counter + 1 )
    }

  return (
      <CounterContext.Provider value={{counter, increaseCounter}}>
          <div>
              <CounterWrapper />
          </div>
      </CounterContext.Provider>

  );
}

export default App;