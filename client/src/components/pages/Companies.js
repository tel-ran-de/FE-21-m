import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllCompanies} from "../../store/actionCreators/company.actionCreator";
import CompanyDetail from "../admin/Company/CompanyDetail";
import {Link} from "react-router-dom";

export default props => {

    const dispatch = useDispatch()
    const companies = useSelector(state => state.company.list)

    useEffect( () => {
        dispatch(getAllCompanies())
    }, [] )

    const renderCompanyList = () => {
        return !companies.length
            ? (<p className="alert alert-warning">No Companies to show</p>)
            : companies.filter(c=>c.isActive === 1).map(c => <CompanyDetail key={c.id} company={c} />)
    }

    return (
        <div className="row">
            <h2>Companies</h2>
            <Link className="" to="/add-company">Add New Company</Link>
            {renderCompanyList()}
        </div>
    )
}