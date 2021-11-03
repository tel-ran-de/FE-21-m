import React, {useState} from 'react';

const GreetingForm = (props) => {

    const [fieldValue, setFieldValue] = useState('');

    const changeFieldHandler = event => {
        setFieldValue( event.target.value );
    }

    const submitHandler = event => {
        event.preventDefault();
        if ( !fieldValue.trim() ) return
        props.onSave(fieldValue.trim());
        setFieldValue('');
    }

    return (
        <div className="d-flex">
            <input
                className="form-control"
                type="text"
                value={fieldValue}
                onChange={changeFieldHandler}
            />
            <button className="btn btn-primary" onClick={submitHandler}>Say Hello</button>
        </div>
    )
    
}

export default GreetingForm;