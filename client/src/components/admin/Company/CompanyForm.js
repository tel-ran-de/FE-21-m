import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addNewCompany, changeCompany, changeCompanyAction} from "../../../store/actionCreators/company.actionCreator";

export default props => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isAction = useSelector(state => state.company.isAction)
    const [formData, setFormData] = useState(props.company)

    const onChangeFieldHandler = e => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const onSubmitForm = e => {
        e.preventDefault()
        if (props.mode === 'edit') {
            dispatch(changeCompany(formData))
        } else if(props.mode === 'add') {
            dispatch(addNewCompany(formData))
        }
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
            <h2>{props.title} Company</h2>
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
                <button type="submit" className="btn btn-primary">{props.title} Company</button>
            </form>
        </div>
    )
}