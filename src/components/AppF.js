import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCounterValue, addDecToCounter, addNumberToCount} from "../store/actionCreator";

const AppF = () => {

    const dispatch = useDispatch();
    const counter = useSelector( state => state.count );

    const addOne = () => {
        dispatch( addCounterValue() )
    }
    const addTen = () => {
        dispatch( addDecToCounter() )
    }
    const addNumber = () => {
        dispatch( addNumberToCount(3) )
    }


    // counter
    // addOne

    return (
        <div className="container mt-5">
            <h2>Function used</h2>

            <p>{counter}</p>
            <button
                onClick={addOne}
                className="btn btn-sm btn-info" >+1</button>

            <button
                onClick={addTen}
                className="btn btn-sm btn-success"
            >+10</button>

            <button
                onClick={addNumber}
                className="btn btn-sm btn-warning"
            >+Number(3)</button>

        </div>
    )
}

export default AppF