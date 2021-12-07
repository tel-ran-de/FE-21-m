import React from 'react'
import {useSelector} from "react-redux";

export default () => {
    const error = useSelector(state => state.error)
    return error.isError ?
        (<div className="w-50 mx-auto text-center alert alert-danger">{error.message}</div>)
        : null
}