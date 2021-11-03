import React from 'react';
import CounterFunction from "./counter/CounterFunction";
import CounterClass from "./counter/CounterClass";
import GreetingMain from "./greeting/GreetingMain";
import TodoMain from "./todo/TodoMain";

function App() {
  return (
    <div className="container">
        {/*<CounterFunction />*/}
        {/*<CounterClass />*/}
      {/*<GreetingMain />*/}
      <TodoMain />
    </div>
  );
}

export default App;