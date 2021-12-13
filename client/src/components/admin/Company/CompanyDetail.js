import React from 'react'
import {useDispatch} from "react-redux";
import {removeCompany} from "../../../store/actionCreators/company.actionCreator";
import {useNavigate} from "react-router-dom";

export default ({company}) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const removeHandler = e => {
        e.preventDefault()
        dispatch(removeCompany(company.id))
    }

    const editHandler = e => {
        e.preventDefault()
        navigate('/edit-company/' + company.id)
    }

    return (
        <>
            <div className="col-9">{company.name} <br/> {company.address}</div>
            <div className="col-3">
                <button
                    onClick={editHandler}
                    className="btn btn-primary btn-sm"
                >Edit</button>
                <button
                    onClick={removeHandler}
                    className="btn btn-danger btn-sm"
                >Remove</button>
            </div>
        </>
    )
}