import React from 'react';

const GreetingHello = (props) => {

    return props.name ? <div>Hi, {props.name}</div> : <div>I'm waiting</div>

}

export default GreetingHello;