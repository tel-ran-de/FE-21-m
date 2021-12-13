import React from 'react'
import CompanyForm from "./CompanyForm";

export default props => {

    return (<CompanyForm
        mode="add"
        title="Add New"
        company={{name: '', address: ''}}
    />)

}