import React, {useContext} from 'react';
import Button from "./Button";
import {CounterContext} from "./App";

const CounterView = () => {

    const {counter} = useContext(CounterContext)

    return (
        <>
        <p>{counter}</p>
            <Button
                title="Increase Counter" />
        </>
    )

}

export default CounterView;