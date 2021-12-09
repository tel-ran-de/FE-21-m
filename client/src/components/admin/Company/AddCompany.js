import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addNewCompany, changeCompanyAction} from "../../../store/actionCreators/company.actionCreator";
import {useNavigate} from "react-router-dom";

export default props => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isAction = useSelector(state => state.company.isAction)

    const [formData, setFormData] = useState({name: '', address: ''})

    const onChangeFieldHandler = e => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const onSubmitForm = e => {
        e.preventDefault()
        dispatch(addNewCompany(formData))
    }

    useEffect(()=>{
        if (isAction) {
            setTimeout(() => {
                dispatch(changeCompanyAction(false))
                navigate('/companies')
            }, 1000)
        }
    },[isAction])



    return (
        <div className="row">
            <h2>Add New Company</h2>
            <form onSubmit={onSubmitForm}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Company Name</label>
                    <input type="text"
                           className="form-control"
                           name="name"
                           placeholder="Enter a Company Name"
                           value={formData.name}
                           onChange={onChangeFieldHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Company Address</label>
                    <textarea
                        className="form-control"
                        name="address"
                        rows="3"
                        placeholder="Enter a Company Address"
                        value={formData.address}
                        onChange={onChangeFieldHandler}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Company</button>
            </form>
        </div>
    )
}