import React, {useContext} from 'react';
import {CounterContext} from "./App";

const Button = ({title}) => {

    const {increaseCounter} = useContext(CounterContext)

    return (
        <button onClick={increaseCounter}>{title}</button>
    )
}

export default Button