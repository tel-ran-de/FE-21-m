import React from 'react';
import Form from "./Form";
import List from "./List";

const Main = () =>  (
    <div className="row">
        <div className="col-sm-4">
            <Form/>
        </div>
        <div className="col-sm-8">
            <List/>
        </div>
    </div>
)

export default Main