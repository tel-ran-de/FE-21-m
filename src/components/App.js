import React from 'react';
import GlobalContextProvider from "../data/GlobalContextProvider";
import UsersList from "./UsersList";
import TodosList from "./TodosList";

const App = () => (
    <GlobalContextProvider>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <UsersList />
                </div>
                <div className="col-8 list-group">
                    <TodosList />
                </div>
            </div>
        </div>
    </GlobalContextProvider>
)

export default App;