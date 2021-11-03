import React, {useState} from 'react'

const CounterFunction = () => {
    const [count, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(count => count + 1)
    }
    return (
        <div>
            <p>Function: {count}</p>
            <button onClick={increaseCounter}>Increase in Function</button>
        </div>
    );
}

export default CounterFunction;