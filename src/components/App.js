import React from 'react'
import Form from "./Form/Form";
import List from "./Deals/List";

const App = () => (
    <div className="container">
        <div className="row">
            <div className="col-sm-4">
                <Form/>
            </div>
            <div className="col-sm-8">
                <List/>
            </div>
        </div>
    </div>
)

export default App