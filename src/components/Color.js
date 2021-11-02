import React, {Component} from 'react';

class Color extends Component {
    render() {
        return (
            <div style={{color: this.props.color, fontWeight: 900}}>
                I'm Color {this.props.color}
            </div>
        );
    }
}

export default Color;