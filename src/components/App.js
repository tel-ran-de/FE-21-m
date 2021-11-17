import React from 'react';
import Users from "./Users/Users";
import Posts from "./Posts/Posts";

function App() {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <Users />
            </div>
            <div className="col">
                <Posts />
            </div>
        </div>

    </div>
  );
}

export default App;