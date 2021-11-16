import React from 'react'

const Button = (props) => (
    <button
        type={props.type}
        className={props.className}
        onClick={props.clickHandler}
    >{props.label}</button>
)

export default Button