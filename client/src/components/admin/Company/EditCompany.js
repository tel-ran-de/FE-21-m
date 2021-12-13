import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCompanyById} from "../../../store/actionCreators/company.actionCreator";
import CompanyForm from "./CompanyForm";

export default props => {

    const {companyId} = useParams()
    const dispatch = useDispatch()
    const company = useSelector(state => state.company.activeCompany)

    useEffect(() => {
        dispatch(getCompanyById(companyId))
    }, [])

    return company ?
        <CompanyForm
            title="Edit"
            company={company}
            mode='edit'
        />
        : (<h2>No data for edit</h2>)
}