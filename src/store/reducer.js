import {ADD_COUNTER, ADD_DEC_COUNTER, ADD_NUMBER_COUNTER} from "./actions";

const initialState = {
    count: 0,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_COUNTER:
            return { ...state, count: state.count + 1 }

        case ADD_DEC_COUNTER:
            return { ...state, count: state.count + 10}

        case ADD_NUMBER_COUNTER:
            return { ...state, count: state.count + action.payload }

        default:
            return state;
    }

}

export default reducer