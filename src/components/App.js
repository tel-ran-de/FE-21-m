import React, {Component} from 'react';
import {connect} from "react-redux";
import {addCounterValue} from "../store/actionCreator";

class App extends Component {


    render() {
        return (
            <div className="container">

                <h2>Class used</h2>

                <p>{this.props.counter}</p>
                <button
                    onClick={this.props.addOne}
                    className="btn btn-sm btn-info" >+1</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOne: () => dispatch( addCounterValue() )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(App);