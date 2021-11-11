import React, {useState} from 'react';

const FormComponent = () => {

    /**
     * fName, lName, email
     */

    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: ''
    })

    const changeFieldHandler = event => {
        setFormData( {...formData, [event.target.name]: event.target.value } )
    }

    return (
        <div>
            <div>
                <form onSubmit={e=>e.preventDefault()}>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   name="fName"
                                   value={formData.fName}
                                   onChange={ e => changeFieldHandler(e) }
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   name="lName"
                                   value={formData.lName}
                                   onChange={ e => changeFieldHandler(e) }
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   name="email"
                                   value={formData.email}
                                   onChange={ e => changeFieldHandler(e) }
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div  className="card">
                <div className="card-body">
                    <p>First Name: {formData.fName}</p>
                    <p>First Name: {formData.lName}</p>
                    <p>Email: {formData.email}</p>
                </div>
            </div>
            <hr/>
        </div>
    )

}

export default FormComponent