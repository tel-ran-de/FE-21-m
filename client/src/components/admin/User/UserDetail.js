import React from 'react'
import {doChangeUserRole} from "../../../store/actionCreators/user.actionCreator";
import {useDispatch} from "react-redux";

export default ({user}) => {

    const dispatch = useDispatch()

    const changeHandler = e => {
        e.preventDefault()
        dispatch(doChangeUserRole(user.id, e.target.value))
    }

    return (
        <div>
            {user.username} ({user.email})
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name={`role_${user.id}`}
                    value="guest"
                    checked={user.role==='guest'}
                    onChange={changeHandler}
                />
                    <label className="form-check-label" htmlFor="inlineRadio1">Guest</label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name={`role_${user.id}`}
                    value="user"
                    checked={user.role==='user'}
                    onChange={changeHandler}
                />
                    <label className="form-check-label" htmlFor="inlineRadio2">User</label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name={`role_${user.id}`}
                    value="admin"
                    checked={user.role==='admin'}
                    onChange={changeHandler}
                />
                    <label className="form-check-label" htmlFor="inlineRadio3">Admin</label>
            </div>
        </div>
    )
}