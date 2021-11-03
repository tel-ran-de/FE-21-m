import React, {Component} from 'react';

class CounterClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increaseCounter = () =>  {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <p>Class: {this.state.count}</p>
                <button onClick={this.increaseCounter}>Increase in Class</button>
            </div>
        );
    }
}

export default CounterClass;