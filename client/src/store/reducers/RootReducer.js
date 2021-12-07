import {combineReducers} from "redux";
import {ErrorReducer} from "./ErrorReducer";
import {AuthReducer} from "./AuthReducer";

export const RootReducer = combineReducers({
    error: ErrorReducer,
    auth: AuthReducer
})