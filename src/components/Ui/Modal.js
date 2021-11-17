import React from 'react'
import './Modal.scss'

export default props => (
    <div className="modal-layout">
        <div className="modal-wrapper">
            {props.children}
        </div>
    </div>
)