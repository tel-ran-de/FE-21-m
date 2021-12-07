import React from 'react'

import Error from "./ui/Error";
import Navbar from "./parts/Navbar";
import SwitchPages from "./parts/SwitchPages";

export default () => {
    return (
        <div className="container">
            <Navbar />
            <Error />
            <SwitchPages />
        </div>
    )
}