import React, {useState} from 'react';
import GreetingForm from "./GreetingForm";
import GreetingHello from "./GreetingHello";

const GreetingMain = () => {

    const [name, setName] = useState('');

    const changeName = newName => setName(newName);

    return (
        <div className="container">
            <GreetingForm onSave={changeName} />
            <GreetingHello name={name} />
        </div>
    )

}

export default GreetingMain;