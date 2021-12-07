import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {doLogin, doRegistration} from "../../store/actionCreators/auth.actionCreator";
import {useNavigate} from "react-router-dom";

const initFormData = {
    email: '',
    password: ''
}

export default () => {

    const [formData, setFormData] = useState(initFormData)
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const isAuth = useSelector(state => state.auth.isAuth)

    useEffect(()=>{
        if (isAuth) {
            navigation('/')
        }
    }, [isAuth])

    const onChangeField = event => {
        setFormData( {...formData, [event.target.id] : event.target.value} )
    }

    const onSubmitForm = event => {
        event.preventDefault()
        dispatch(doLogin(formData))
    }

    return (
        <div className="w-50 mx-auto mt-5">
            <h2>Login</h2>
            <form onSubmit={onSubmitForm}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input onChange={onChangeField} value={formData.email} type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={onChangeField} value={formData.password} type="password" className="form-control" id="password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}